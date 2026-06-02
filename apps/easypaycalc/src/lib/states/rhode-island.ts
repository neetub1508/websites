import type { StateInfo } from './types';
import { CAP } from '../tax';

export const RHODE_ISLAND: StateInfo = {
  "code": "RI",
  "name": "Rhode Island",
  "slug": "rhode-island",
  "hasIncomeTax": true,
  "taxSummary": "3.75% – 5.99%",
  "standardDeduction": {
    "single": 10900,
    "married": 21800
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0375,
        "upTo": 79900
      },
      {
        "rate": 0.0475,
        "upTo": 181650
      },
      {
        "rate": 0.0599,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0375,
        "upTo": 79900
      },
      {
        "rate": 0.0475,
        "upTo": 181650
      },
      {
        "rate": 0.0599,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "Temporary Disability Insurance (TDI)",
      "rate": 0.013,
      "wageBase": 89200
    }
  ],
  "intro": "Rhode Island taxes wage income at three modest marginal rates ranging from 3.75% up to a top rate of 5.99%, putting it in the middle of the pack among states with an income tax. There are no city or county income taxes anywhere in Rhode Island, so your state withholding is the only income tax that reduces take-home pay. Workers also have a Temporary Disability Insurance contribution withheld from wages, a small additional payroll deduction that funds the state's disability and caregiver benefits.",
  "highlights": [
    "Three graduated brackets for 2025: 3.75% on income up to $79,900, 4.75% from $79,900 to $181,650, and 5.99% above $181,650 — identical thresholds for single and joint filers",
    "2025 standard deduction is $10,900 for single filers and $21,800 for married couples filing jointly, with a $5,100 personal exemption per person",
    "Rhode Island levies no local income taxes, but employees pay a 1.3% Temporary Disability Insurance (TDI) contribution on the first $89,200 of wages in 2025"
  ]
};
