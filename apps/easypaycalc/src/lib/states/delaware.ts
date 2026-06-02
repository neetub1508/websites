import type { StateInfo } from './types';
import { CAP } from '../tax';

export const DELAWARE: StateInfo = {
  "code": "DE",
  "name": "Delaware",
  "slug": "delaware",
  "hasIncomeTax": true,
  "taxSummary": "0% – 6.6%",
  "standardDeduction": {
    "single": 5700,
    "married": 11400
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 2000
      },
      {
        "rate": 0.022,
        "upTo": 5000
      },
      {
        "rate": 0.039,
        "upTo": 10000
      },
      {
        "rate": 0.048,
        "upTo": 20000
      },
      {
        "rate": 0.052,
        "upTo": 25000
      },
      {
        "rate": 0.0555,
        "upTo": 60000
      },
      {
        "rate": 0.066,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 2000
      },
      {
        "rate": 0.022,
        "upTo": 5000
      },
      {
        "rate": 0.039,
        "upTo": 10000
      },
      {
        "rate": 0.048,
        "upTo": 20000
      },
      {
        "rate": 0.052,
        "upTo": 25000
      },
      {
        "rate": 0.0555,
        "upTo": 60000
      },
      {
        "rate": 0.066,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Delaware levies a progressive income tax topping out at 6.6%, but its first $2,000 of taxable income is tax-free and there's no state or local sales tax to erode your spending. Take-home pay is generally moderate: the brackets are graduated rather than flat, so lower earners keep more, while the 6.6% top rate kicks in at just $60,000. The only local wage tax is Wilmington's, which slightly reduces net pay for those who live or work in that city.",
  "highlights": [
    "Seven graduated brackets from 0% on the first $2,000 up to 6.6% on taxable income over $60,000",
    "Standard deduction is $5,700 for single filers and $11,400 for married couples filing jointly, doubled by HB89 effective tax year 2024",
    "Brackets are identical for single and married-filing-jointly filers, with no marriage-based bracket widening"
  ],
  "localNote": "The City of Wilmington imposes a 1.25% earned income (wage) tax on salaries, wages, and net profits of residents and of nonresidents working within the city. No other Delaware municipalities or counties impose a local income tax."
};
