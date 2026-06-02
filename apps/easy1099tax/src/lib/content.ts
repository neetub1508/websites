// Shared editorial content so on-page copy and JSON-LD schema never drift apart.
import type { Faq } from './seo';

export const FAQS: Faq[] = [
  {
    q: 'How much tax do I pay on 1099 income?',
    a: 'On 1099 / self-employment income you pay two layers: self-employment tax of 15.3% (12.4% Social Security + 2.9% Medicare) on 92.35% of your net profit, plus federal income tax at your regular bracket. A common rule of thumb is to set aside 25%–30% of your net 1099 income for taxes, though the exact amount depends on your total income, filing status, deductions, and state.',
  },
  {
    q: 'What is the self-employment tax rate for 2025 and 2026?',
    a: 'The self-employment tax rate is 15.3%, made up of 12.4% for Social Security and 2.9% for Medicare. The 12.4% Social Security portion only applies up to the wage base — $176,100 in 2025 and $184,500 in 2026 — while the 2.9% Medicare portion applies to all net earnings with no cap.',
  },
  {
    q: 'Why is self-employment tax calculated on 92.35% of profit?',
    a: 'The IRS lets you reduce your net profit by 7.65% before applying the 15.3% rate, so SE tax is figured on 92.35% of your net profit. This mirrors the employer-side payroll tax a traditional employer would have paid for a W-2 employee. You then also deduct one-half of your SE tax when calculating income tax.',
  },
  {
    q: 'Do I have to pay quarterly estimated taxes?',
    a: 'Generally yes. If you expect to owe $1,000 or more in tax for the year, the IRS expects you to make four quarterly estimated payments rather than paying it all in April. The due dates fall around April 15, June 15, September 15, and January 15 of the following year. Missing them can trigger an underpayment penalty.',
  },
  {
    q: 'What can I deduct to lower my 1099 taxes?',
    a: 'Ordinary and necessary business expenses (Schedule C) reduce your net profit directly — home office, mileage, supplies, software, phone, health insurance, and more. You also deduct one-half of your SE tax, and many self-employed people qualify for the 20% Qualified Business Income (QBI) deduction. Every dollar of legitimate expense lowers both your SE tax and your income tax.',
  },
  {
    q: 'Is this 1099 tax calculator accurate?',
    a: 'It uses the current IRS self-employment tax mechanics (15.3% on 92.35% of net profit, the Social Security wage cap, the 0.9% Additional Medicare Tax, the 50% SE-tax deduction) and federal income-tax brackets to give a close estimate. 2026 figures are estimates pending final IRS release. It is an estimate for planning, not tax advice, and does not yet include state income tax.',
  },
];
