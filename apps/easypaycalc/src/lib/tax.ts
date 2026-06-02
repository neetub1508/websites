// ============================================================================
// Take-Home Pay tax engine — TAX YEAR 2025
//
// ⚠️ VERIFY ALL FIGURES against official sources before launch:
//   - Federal brackets / standard deduction: IRS Rev. Proc. 2024-40
//   - FICA wage base: SSA 2025 announcement
//   - California: CA FTB 2025 tax rate schedules + EDD SDI rate
// Numbers below are 2025 best-known values, centralized here so updating
// for a new tax year touches ONLY this file.
// ============================================================================

export type FilingStatus = 'single' | 'married';

/** A marginal bracket: `rate` applies up to `upTo` (upper bound, USD). */
export interface Bracket {
  rate: number;
  upTo: number;
}

// ---------------------------------------------------------------------------
// Federal
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
      { rate: 0.37, upTo: Infinity },
    ],
    married: [
      { rate: 0.10, upTo: 23850 },
      { rate: 0.12, upTo: 96950 },
      { rate: 0.22, upTo: 206700 },
      { rate: 0.24, upTo: 394600 },
      { rate: 0.32, upTo: 501050 },
      { rate: 0.35, upTo: 751600 },
      { rate: 0.37, upTo: Infinity },
    ],
  } as Record<FilingStatus, Bracket[]>,
};

export const FICA = {
  socialSecurityRate: 0.062,
  socialSecurityWageBase: 176100, // 2025
  medicareRate: 0.0145,
  additionalMedicareRate: 0.009,
  additionalMedicareThreshold: { single: 200000, married: 250000 } as Record<FilingStatus, number>,
};

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
export interface StateTax {
  code: string;
  name: string;
  hasIncomeTax: boolean;
  standardDeduction: Record<FilingStatus, number>;
  brackets: Record<FilingStatus, Bracket[]>;
  /** Flat payroll taxes (e.g. CA SDI). */
  extra: { name: string; rate: number; wageBase?: number }[];
  note: string;
}

export const CALIFORNIA: StateTax = {
  code: 'CA',
  name: 'California',
  hasIncomeTax: true,
  standardDeduction: { single: 5540, married: 11080 },
  brackets: {
    single: [
      { rate: 0.01, upTo: 10756 },
      { rate: 0.02, upTo: 25499 },
      { rate: 0.04, upTo: 40245 },
      { rate: 0.06, upTo: 55866 },
      { rate: 0.08, upTo: 70606 },
      { rate: 0.093, upTo: 360659 },
      { rate: 0.103, upTo: 432787 },
      { rate: 0.113, upTo: 721314 },
      { rate: 0.123, upTo: Infinity },
    ],
    married: [
      { rate: 0.01, upTo: 21512 },
      { rate: 0.02, upTo: 50998 },
      { rate: 0.04, upTo: 80490 },
      { rate: 0.06, upTo: 111732 },
      { rate: 0.08, upTo: 141212 },
      { rate: 0.093, upTo: 721318 },
      { rate: 0.103, upTo: 865574 },
      { rate: 0.113, upTo: 1442628 },
      { rate: 0.123, upTo: Infinity },
    ],
  },
  extra: [{ name: 'CA SDI', rate: 0.011 }], // State Disability Insurance, no wage cap (2024+)
  note: 'California has a progressive state income tax (1%–12.3%) plus State Disability Insurance (SDI).',
};

// ---------------------------------------------------------------------------
// Engine
// ---------------------------------------------------------------------------
function progressiveTax(taxable: number, brackets: Bracket[]): number {
  let tax = 0;
  let lower = 0;
  for (const b of brackets) {
    if (taxable <= lower) break;
    const slice = Math.min(taxable, b.upTo) - lower;
    tax += slice * b.rate;
    lower = b.upTo;
  }
  return tax;
}

export interface PaycheckInput {
  annualGross: number;
  filing: FilingStatus;
  state: StateTax;
  /** Pay periods per year (12 monthly, 24 semi-monthly, 26 biweekly, 52 weekly). */
  payPeriods: number;
  /** Annual pre-tax retirement contribution (401k/403b). */
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

  // FICA (on gross wages; pre-tax 401k is still subject to FICA, so use annualGross)
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
    amount: Math.min(annualGross, e.wageBase ?? Infinity) * e.rate,
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
