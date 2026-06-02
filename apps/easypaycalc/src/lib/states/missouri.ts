import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MISSOURI: StateInfo = {
  "code": "MO",
  "name": "Missouri",
  "slug": "missouri",
  "hasIncomeTax": true,
  "taxSummary": "2% – 4.7%",
  "standardDeduction": {
    "single": 15750,
    "married": 31500
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 1313
      },
      {
        "rate": 0.02,
        "upTo": 2626
      },
      {
        "rate": 0.025,
        "upTo": 3939
      },
      {
        "rate": 0.03,
        "upTo": 5252
      },
      {
        "rate": 0.035,
        "upTo": 6565
      },
      {
        "rate": 0.04,
        "upTo": 7878
      },
      {
        "rate": 0.045,
        "upTo": 9191
      },
      {
        "rate": 0.047,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 1313
      },
      {
        "rate": 0.02,
        "upTo": 2626
      },
      {
        "rate": 0.025,
        "upTo": 3939
      },
      {
        "rate": 0.03,
        "upTo": 5252
      },
      {
        "rate": 0.035,
        "upTo": 6565
      },
      {
        "rate": 0.04,
        "upTo": 7878
      },
      {
        "rate": 0.045,
        "upTo": 9191
      },
      {
        "rate": 0.047,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Missouri keeps a relatively light touch on take-home pay, with a top marginal income tax rate of just 4.7% for 2025 — down from 4.8% the prior year — and the first $1,313 of taxable income taxed at 0%. Because the state conforms to the generous federal standard deduction ($15,750 single / $31,500 joint), many lower- and middle-income workers shield a large share of wages before any state tax applies. Workers in Kansas City or St. Louis, however, owe an additional 1% local earnings tax that further trims their paychecks.",
  "highlights": [
    "Top marginal rate dropped to 4.7% for 2025, reduced from 4.8% after revenue triggers under SB 3 were met",
    "Missouri's brackets are identical for single and married-filing-combined filers, with eight tiers and the first $1,313 taxed at 0%",
    "The state ties its standard deduction to the federal amount, $15,750 for single and $31,500 for joint filers in 2025"
  ],
  "localNote": "Kansas City and St. Louis each impose a 1% local earnings tax on wages earned by residents and by nonresidents working within the city."
};
