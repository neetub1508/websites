import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MASSACHUSETTS: StateInfo = {
  "code": "MA",
  "name": "Massachusetts",
  "slug": "massachusetts",
  "hasIncomeTax": true,
  "taxSummary": "Flat 5% (9% over $1,083,150)",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.05,
        "upTo": 1083150
      },
      {
        "rate": 0.09,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.05,
        "upTo": 1083150
      },
      {
        "rate": 0.09,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "Paid Family and Medical Leave (PFML)",
      "rate": 0.0046,
      "wageBase": 176100
    }
  ],
  "intro": "Massachusetts levies a flat 5% income tax on most wage income, so take-home pay does not shrink as you climb into higher earnings the way it does in graduated-bracket states. A 4% \"millionaires\" surtax adds to that on taxable income above $1,083,150 (2025 threshold), pushing the top rate to 9% for very high earners. There are no city or county income taxes, but a small Paid Family and Medical Leave payroll deduction is withheld from wages.",
  "highlights": [
    "Flat 5% individual income tax rate applies to nearly all wage income regardless of how much you earn",
    "A 4% surtax on taxable income above $1,083,150 (inflation-adjusted for 2025) raises the top effective rate to 9%",
    "Massachusetts has no standard deduction; instead it uses personal exemptions of $4,400 for single filers and $8,800 for married filing jointly"
  ]
};
