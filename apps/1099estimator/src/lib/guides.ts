// Central list of guide articles. Add a guide here and it automatically appears
// in the /guides hub, the sitemap, and the footer.
export interface Guide {
  slug: string;
  title: string;
  blurb: string;
}

export const GUIDES: Guide[] = [
  {
    slug: 'self-employment-tax-explained',
    title: 'Self-Employment Tax Explained',
    blurb: 'The 15.3% tax, the 92.35% adjustment, the Social Security cap, and the half-SE-tax deduction — in plain English.',
  },
  {
    slug: 'quarterly-estimated-taxes',
    title: 'How to Pay Quarterly Estimated Taxes',
    blurb: 'Who has to pay, the 2025–2026 due dates, how much to send, the safe-harbor rule, and how to pay the IRS.',
  },
  {
    slug: '1099-tax-rate-how-much-to-set-aside',
    title: '1099 Tax Rate: How Much to Set Aside',
    blurb: 'The real all-in rate on 1099 income and how much of every payment to save for taxes.',
  },
  {
    slug: 'self-employed-tax-deductions',
    title: 'Top Tax Deductions for the Self-Employed',
    blurb: 'Home office, mileage, health insurance, retirement, QBI — the write-offs that cut both your taxes.',
  },
  {
    slug: 'qbi-deduction',
    title: 'What Is the QBI Deduction?',
    blurb: 'The 20% Qualified Business Income deduction: who qualifies, the income thresholds, and the SSTB limits.',
  },
  {
    slug: '1099-vs-w2',
    title: '1099 vs W-2: Tax Differences Explained',
    blurb: 'Contractor vs employee — who pays which payroll taxes, withholding vs estimates, and what you can deduct.',
  },
];
