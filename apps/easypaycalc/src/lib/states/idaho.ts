import type { StateInfo } from './types';
import { CAP } from '../tax';

export const IDAHO: StateInfo = {
  "code": "ID",
  "name": "Idaho",
  "slug": "idaho",
  "hasIncomeTax": true,
  "taxSummary": "Flat 5.3%",
  "standardDeduction": {
    "single": 15750,
    "married": 31500
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 4811
      },
      {
        "rate": 0.053,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 9622
      },
      {
        "rate": 0.053,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Idaho taxes wage income at a single flat rate of 5.3% in 2025, after a 0% bracket on the first $4,811 of taxable income for single filers ($9,622 for joint filers). The rate dropped from 5.695% to 5.3% under HB 40, signed in March 2025 and retroactive to January 1, giving Idaho residents a slightly larger take-home paycheck than the prior year. There are no local or city income taxes in Idaho, so this flat state rate is the only state-level income tax burden on wages.",
  "highlights": [
    "Idaho applies a flat 5.3% income tax rate in 2025, reduced from 5.695% by HB 40",
    "The first $4,811 of taxable income for single filers ($9,622 married) is taxed at 0%",
    "Idaho conforms to the federal standard deduction, $15,750 single and $31,500 married for 2025"
  ]
};
