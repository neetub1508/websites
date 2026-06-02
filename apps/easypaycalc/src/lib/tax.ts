// ============================================================================
// Take-Home Pay tax ENGINE + TYPES — TAX YEAR 2025
//
// This file holds ONLY the calculation logic and types. All per-state DATA
// lives in states.ts. Update tax tables for a new year in states.ts + the
// FEDERAL/FICA constants below.
//
// ⚠️ VERIFY figures against official sources before launch:
//   - Federal brackets / standard deduction: IRS Rev. Proc. 2024-40
//   - FICA wage base: SSA 2025 announcement
// ============================================================================

export const TAX_YEAR = 2025;

// JSON cannot represent Infinity, and state data is serialized to the client,
// so the top bracket uses this large finite cap instead of Infinity.
export const CAP = 1e12;

export type FilingStatus = 'single' | 'married';

/** A marginal bracket: `rate` applies up to `upTo` (upper bound, USD). */
export interface Bracket {
  rate: number;
  upTo: number;
}

export interface ExtraTax {
  name: string;
  rate: number;
  wageBase?: number;
}

/** The minimal tax configuration the engine needs (serializable to the client). */
export interface StateTaxConfig {
  code: string;
  name: string;
  hasIncomeTax: boolean;
  standardDeduction: Record<FilingStatus, number>;
  brackets: Record<FilingStatus, Bracket[]>;
  extra: ExtraTax[];
}

// ---------------------------------------------------------------------------
// Federal (2025)
// ---------------------------------------------------------------------------
export const FEDERAL = {
  standardDeduction: { single: 15000, married: 30000 } as Record<FilingStatus, number>,
  brackets: {
    single: [
      { rate: 0.10, upTo: 11925 },
      { rate: 0.12, upTo: 48475 },
      { rate: 0.22, upTo: 103350 },
      { rate: 0.24, upTo: 197300 },
      { rate: 0.32, upTo: 250525 },
      { rate: 0.35, upTo: 626350 },
      { rate: 0.37, upTo: CAP },
    ],
    married: [
      { rate: 0.10, upTo: 23850 },
      { rate: 0.12, upTo: 96950 },
      { rate: 0.22, upTo: 206700 },
      { rate: 0.24, upTo: 394600 },
      { rate: 0.32, upTo: 501050 },
      { rate: 0.35, upTo: 751600 },
      { rate: 0.37, upTo: CAP },
    ],
  } as Record<FilingStatus, Bracket[]>,
};

export const FICA = {
  socialSecurityRate: 0.062,
  socialSecurityWageBase: 176100,
  medicareRate: 0.0145,
  additionalMedicareRate: 0.009,
  additionalMedicareThreshold: { single: 200000, married: 250000 } as Record<FilingStatus, number>,
};

// ---------------------------------------------------------------------------
// Engine
// ---------------------------------------------------------------------------
function progressiveTax(taxable: number, brackets: Bracket[]): number {
  let tax = 0;
  let lower = 0;
  for (const b of brackets) {
    if (taxable <= lower) break;
    tax += (Math.min(taxable, b.upTo) - lower) * b.rate;
    lower = b.upTo;
  }
  return tax;
}

export interface PaycheckInput {
  annualGross: number;
  filing: FilingStatus;
  state: StateTaxConfig;
  payPeriods: number;
  pretax?: number;
}

export interface LineItem {
  label: string;
  amount: number;
}

export interface PaycheckResult {
  annualGross: number;
  pretax: number;
  deductions: LineItem[];
  totalTax: number;
  annualNet: number;
  perPeriodGross: number;
  perPeriodNet: number;
  effectiveRate: number;
}

export function computePaycheck(input: PaycheckInput): PaycheckResult {
  const { annualGross, filing, state, payPeriods } = input;
  const pretax = Math.max(0, input.pretax ?? 0);
  const afterPretax = Math.max(0, annualGross - pretax);

  // Federal income tax
  const fedTaxable = Math.max(0, afterPretax - FEDERAL.standardDeduction[filing]);
  const federalTax = progressiveTax(fedTaxable, FEDERAL.brackets[filing]);

  // FICA — on gross wages (pre-tax 401k is still subject to FICA)
  const socialSecurity = Math.min(annualGross, FICA.socialSecurityWageBase) * FICA.socialSecurityRate;
  let medicare = annualGross * FICA.medicareRate;
  const addlThreshold = FICA.additionalMedicareThreshold[filing];
  if (annualGross > addlThreshold) {
    medicare += (annualGross - addlThreshold) * FICA.additionalMedicareRate;
  }

  // State income tax
  let stateTax = 0;
  if (state.hasIncomeTax) {
    const stateTaxable = Math.max(0, afterPretax - state.standardDeduction[filing]);
    stateTax = progressiveTax(stateTaxable, state.brackets[filing]);
  }

  // State extras (e.g. CA SDI)
  const extras: LineItem[] = state.extra.map((e) => ({
    label: e.name,
    amount: Math.min(annualGross, e.wageBase ?? CAP) * e.rate,
  }));

  const deductions: LineItem[] = [
    { label: 'Federal income tax', amount: federalTax },
    { label: 'Social Security', amount: socialSecurity },
    { label: 'Medicare', amount: medicare },
    ...(state.hasIncomeTax ? [{ label: `${state.name} state tax`, amount: stateTax }] : []),
    ...extras,
  ];

  const totalTax = deductions.reduce((s, d) => s + d.amount, 0);
  const annualNet = Math.max(0, afterPretax - totalTax);

  return {
    annualGross,
    pretax,
    deductions,
    totalTax,
    annualNet,
    perPeriodGross: annualGross / payPeriods,
    perPeriodNet: annualNet / payPeriods,
    effectiveRate: annualGross > 0 ? totalTax / annualGross : 0,
  };
}
