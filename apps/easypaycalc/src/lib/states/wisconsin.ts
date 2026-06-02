import type { StateInfo } from './types';
import { CAP } from '../tax';

export const WISCONSIN: StateInfo = {
  "code": "WI",
  "name": "Wisconsin",
  "slug": "wisconsin",
  "hasIncomeTax": true,
  "taxSummary": "3.5% – 7.65%",
  "standardDeduction": {
    "single": 14260,
    "married": 26510
  },
  "brackets": {
    "single": [
      {
        "rate": 0.035,
        "upTo": 14680
      },
      {
        "rate": 0.044,
        "upTo": 50480
      },
      {
        "rate": 0.053,
        "upTo": 323290
      },
      {
        "rate": 0.0765,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.035,
        "upTo": 19580
      },
      {
        "rate": 0.044,
        "upTo": 67300
      },
      {
        "rate": 0.053,
        "upTo": 431060
      },
      {
        "rate": 0.0765,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Wisconsin taxes wage income under a four-bracket progressive system ranging from 3.5% to 7.65%, placing it in the middle-to-upper tier of state income tax burdens. For 2025, take-home pay improved for many middle earners because 2025 Wisconsin Act 15 widened the 4.4% bracket, so more income is taxed at lower rates before the 5.3% rate applies. There are no city or county income taxes anywhere in Wisconsin, so the state rate is the only state-level income tax affecting your paycheck.",
  "highlights": [
    "2025 Wisconsin Act 15 (signed July 3, 2025) expanded the 4.4% bracket to end at $50,480 for single filers and $67,300 for married-filing-jointly, up from $29,370 and $39,150.",
    "Wisconsin uses a sliding-scale standard deduction that maxes at $14,260 (single) and $26,510 (married filing jointly) and phases down to $0 as income rises.",
    "No Wisconsin city or county levies a local income tax, and the state has no separate wage payroll taxes such as disability or paid-family-leave deductions."
  ]
};
