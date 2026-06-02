import type { StateInfo } from './types';
import { CAP } from '../tax';

export const NEBRASKA: StateInfo = {
  "code": "NE",
  "name": "Nebraska",
  "slug": "nebraska",
  "hasIncomeTax": true,
  "taxSummary": "2.46% – 5.20%",
  "standardDeduction": {
    "single": 8600,
    "married": 17200
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0246,
        "upTo": 4029
      },
      {
        "rate": 0.0351,
        "upTo": 24119
      },
      {
        "rate": 0.0501,
        "upTo": 38869
      },
      {
        "rate": 0.052,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0246,
        "upTo": 8039
      },
      {
        "rate": 0.0351,
        "upTo": 48249
      },
      {
        "rate": 0.0501,
        "upTo": 77729
      },
      {
        "rate": 0.052,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Nebraska levies a graduated state income tax topping out at 5.20% for the 2025 tax year, a moderate rate that lands the state in the middle of the pack nationally. There are no city or county income taxes, so your paycheck only faces the single statewide bracket schedule on top of federal withholding. The state is actively cutting rates, with the top rate scheduled to fall to 4.55% in 2026 and 3.99% by 2027, meaning take-home pay should rise in coming years.",
  "highlights": [
    "Four graduated brackets ranging from 2.46% to 5.20% for tax year 2025, with the top rate kicking in above $38,870 for single filers and $77,730 for married couples filing jointly",
    "Standard deduction of $8,600 for single filers and $17,200 for married filing jointly, with a $171 per-person nonrefundable personal exemption credit",
    "No local or municipal income taxes anywhere in Nebraska, and the top rate is being phased down to 3.99% by 2027 under LB 754"
  ]
};
