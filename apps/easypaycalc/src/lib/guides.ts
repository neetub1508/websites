// Central list of guide articles. Add a guide here and it automatically appears
// in the /guides hub, the sitemap, and the footer.
export interface Guide {
  slug: string;
  title: string;
  blurb: string;
}

export const GUIDES: Guide[] = [
  {
    slug: 'gross-vs-net-pay',
    title: 'Gross Pay vs Net Pay Explained',
    blurb: 'Everything subtracted between your headline salary and what actually lands in your bank account.',
  },
  {
    slug: 'how-to-read-your-pay-stub',
    title: 'How to Read Your Pay Stub',
    blurb: 'Decode every line — gross, net, withholding, FICA, deductions, and YTD totals — and spot errors.',
  },
  {
    slug: 'what-is-fica',
    title: 'What Is FICA? Social Security & Medicare',
    blurb: 'The two payroll taxes on every paycheck, their rates and caps, and how employer matching works.',
  },
  {
    slug: 'pre-tax-deductions-401k-hsa',
    title: 'Pre-Tax Deductions: 401(k), HSA & FSA',
    blurb: 'How pre-tax contributions lower your taxable income and raise your take-home pay.',
  },
  {
    slug: 'salary-vs-hourly-pay',
    title: 'Salary vs Hourly: How Pay Is Calculated',
    blurb: 'Converting hourly to annual, pay-period counts, overtime, and how taxes apply to both.',
  },
  {
    slug: 'states-with-no-income-tax',
    title: 'States With No Income Tax (2025)',
    blurb: 'The nine states that don’t tax wages, the tradeoffs, and how much more you keep.',
  },
];
