import type { StateInfo } from './types';
import { CAP } from '../tax';

export const NEW_MEXICO: StateInfo = {
  "code": "NM",
  "name": "New Mexico",
  "slug": "new-mexico",
  "hasIncomeTax": true,
  "taxSummary": "1.5% – 5.9%",
  "standardDeduction": {
    "single": 15750,
    "married": 31500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.015,
        "upTo": 5500
      },
      {
        "rate": 0.032,
        "upTo": 16500
      },
      {
        "rate": 0.043,
        "upTo": 33500
      },
      {
        "rate": 0.047,
        "upTo": 66500
      },
      {
        "rate": 0.049,
        "upTo": 210000
      },
      {
        "rate": 0.059,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.015,
        "upTo": 8000
      },
      {
        "rate": 0.032,
        "upTo": 25000
      },
      {
        "rate": 0.043,
        "upTo": 50000
      },
      {
        "rate": 0.047,
        "upTo": 100000
      },
      {
        "rate": 0.049,
        "upTo": 315000
      },
      {
        "rate": 0.059,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "New Mexico taxes wage income on a progressive scale running from 1.5% up to a top rate of 5.9%, leaving take-home pay relatively healthy for low- and middle-income earners after a 2025 restructuring that added a new lower bracket. There are no city or county income taxes anywhere in the state, so your only state-level withholding is the personal income tax. Combined with a standard deduction that mirrors the generous federal amount, New Mexico's overall income-tax burden lands in the moderate range compared with higher-tax neighbors.",
  "highlights": [
    "Six marginal brackets for 2025 ranging from 1.5% to a top rate of 5.9% on income above $210,000 (single) / $315,000 (married filing jointly)",
    "House Bill 252 (2024) restructured the brackets for tax year 2025, adding a new 4.3% bracket and widening lower brackets to cut taxes for most middle-income households",
    "New Mexico conforms to the federal standard deduction ($15,750 single / $31,500 married for 2025) and imposes no local or municipal income taxes"
  ]
};
