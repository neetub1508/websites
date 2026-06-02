import type { StateInfo } from './types';
import { CAP } from '../tax';

export const KANSAS: StateInfo = {
  "code": "KS",
  "name": "Kansas",
  "slug": "kansas",
  "hasIncomeTax": true,
  "taxSummary": "5.2% – 5.58%",
  "standardDeduction": {
    "single": 3605,
    "married": 8240
  },
  "brackets": {
    "single": [
      {
        "rate": 0.052,
        "upTo": 23000
      },
      {
        "rate": 0.0558,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.052,
        "upTo": 46000
      },
      {
        "rate": 0.0558,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Kansas taxes wage income at a relatively low two-bracket rate that tops out at 5.58%, so take-home pay is higher than in most progressive-tax states. There are no city or county income taxes in Kansas, meaning your state withholding is the only state-level bite out of your paycheck. Recent reform (Senate Bill 1) lowered both rates and raised exemptions, making Kansas modestly more competitive than neighboring high-tax states.",
  "highlights": [
    "Two marginal brackets: 5.2% up to $23,000 ($46,000 married) and 5.58% above that",
    "Generous personal exemption of $9,160 for single filers and $18,320 for married couples filing jointly",
    "No local city or county income taxes anywhere in Kansas"
  ]
};
