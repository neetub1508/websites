// ============================================================================
// Pure, reusable self-employment / 1099 tax engine. No DOM, no side effects —
// importable by the page's client script AND by unit tests. Mirrors the IRS
// ordering in spec §3: SE tax → ½ SE deduction → income tax (QBI) → totals.
// ============================================================================
import {
  TAX_DATA,
  ADDITIONAL_MEDICARE_THRESHOLD,
  SE_RATE,
  type Bracket,
  type Filing,
  type Year,
} from './tax-data';

export interface CalcInput {
  year: Year;
  filing: Filing;
  seIncome: number; // gross 1099 / self-employment income
  expenses: number; // Schedule C business expenses
  w2Income: number; // optional W-2 wages
  useQbi: boolean;
}

export interface CalcResult {
  netProfit: number;
  seTax: number;
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  halfSeDeduction: number;
  federalIncomeTax: number;
  qbiDeduction: number;
  totalTax: number;
  effectiveRate: number;
  marginalRate: number;
  takeHome: number;
  quarterly: number;
  estimated: boolean;
}

function bracketTax(income: number, brackets: Bracket[]): number {
  let tax = 0;
  let last = 0;
  for (const [cap, rate] of brackets) {
    if (income <= last) break;
    tax += (Math.min(income, cap) - last) * rate;
    last = cap;
  }
  return tax;
}

function marginalRate(income: number, brackets: Bracket[]): number {
  for (const [cap, rate] of brackets) {
    if (income <= cap) return rate;
  }
  return brackets[brackets.length - 1][1];
}

export function calc(input: CalcInput): CalcResult {
  const d = TAX_DATA[input.year];
  const seIncome = Math.max(0, input.seIncome || 0);
  const expenses = Math.max(0, input.expenses || 0);
  const w2 = Math.max(0, input.w2Income || 0);

  const netProfit = Math.max(0, seIncome - expenses);
  const netEarnings = netProfit * SE_RATE.netEarnings;

  // --- Self-employment tax ---
  let socialSecurity = 0;
  let medicare = 0;
  let additionalMedicare = 0;
  if (netEarnings >= 400) {
    const ssRoom = Math.max(0, d.ssWageBase - w2); // W-2 wages already consume the SS cap
    socialSecurity = Math.min(netEarnings, ssRoom) * SE_RATE.socialSecurity;
    medicare = netEarnings * SE_RATE.medicare;
    const threshold = ADDITIONAL_MEDICARE_THRESHOLD[input.filing];
    const over = Math.max(0, netEarnings + w2 - threshold);
    additionalMedicare = Math.min(netEarnings, over) * 0.009;
  }
  const seTax = socialSecurity + medicare + additionalMedicare;
  const halfSeDeduction = seTax * 0.5;

  // --- Federal income tax ---
  const agi = w2 + netProfit - halfSeDeduction;
  const taxableBeforeQbi = Math.max(0, agi - d.stdDeduction[input.filing]);
  const qbiDeduction = input.useQbi ? Math.min(0.2 * netProfit, 0.2 * taxableBeforeQbi) : 0;
  const taxable = Math.max(0, taxableBeforeQbi - qbiDeduction);
  const federalIncomeTax = bracketTax(taxable, d.brackets[input.filing]);

  // --- Totals ---
  const totalTax = seTax + federalIncomeTax;
  const grossIncome = seIncome + w2;
  const effectiveRate = grossIncome > 0 ? totalTax / grossIncome : 0;

  return {
    netProfit,
    seTax,
    socialSecurity,
    medicare,
    additionalMedicare,
    halfSeDeduction,
    federalIncomeTax,
    qbiDeduction,
    totalTax,
    effectiveRate,
    marginalRate: marginalRate(taxable, d.brackets[input.filing]),
    takeHome: grossIncome - expenses - totalTax,
    quarterly: totalTax / 4,
    estimated: d.estimated,
  };
}
