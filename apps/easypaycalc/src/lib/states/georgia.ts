import type { StateInfo } from './types';
import { CAP } from '../tax';

export const GEORGIA: StateInfo = {
  "code": "GA",
  "name": "Georgia",
  "slug": "georgia",
  "hasIncomeTax": true,
  "taxSummary": "Flat 5.19%",
  "standardDeduction": {
    "single": 12000,
    "married": 24000
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0519,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0519,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Georgia taxes wage income at a single flat rate of 5.19% for tax year 2025, a mid-range level that keeps take-home pay higher than in graduated-rate states whose top brackets exceed 9%. The 2025 rate was lowered to 5.19% retroactive to January 1 under House Bill 111, accelerating a planned series of cuts, so withholding tables were updated mid-year. Because no Georgia city or county levies its own income tax, your state liability is the same statewide, making net pay simpler to estimate than in places like Ohio or Maryland.",
  "highlights": [
    "Flat 5.19% individual income tax for tax year 2025, reduced under HB 111 retroactive to January 1, 2025",
    "Standard deduction is $12,000 for single filers and $24,000 for married filing jointly, with a $4,000 exemption per dependent",
    "No city or county income taxes anywhere in Georgia, and the rate is scheduled to step down toward 4.99% in future years"
  ]
};
