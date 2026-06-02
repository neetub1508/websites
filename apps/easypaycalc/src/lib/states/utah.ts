import type { StateInfo } from './types';
import { CAP } from '../tax';

export const UTAH: StateInfo = {
  "code": "UT",
  "name": "Utah",
  "slug": "utah",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4.5%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.045,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.045,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Utah levies a single flat income tax rate of 4.5% on all taxable income, which was reduced from 4.55% for the 2025 tax year. There are no city or county income taxes anywhere in Utah, so your state withholding is predictable regardless of where you live. While the flat rate is moderate compared to high-tax states, Utah offsets it for lower earners through a Taxpayer Tax Credit rather than a traditional standard deduction.",
  "highlights": [
    "Utah uses a single flat tax rate of 4.5% on all taxable income, with no graduated brackets",
    "Utah has no standard deduction; instead it offers a Taxpayer Tax Credit equal to 6% of federal deductions and exemptions that phases out at 1.3% above income thresholds",
    "No Utah city or county imposes a local income tax, so the 4.5% state rate is the only income tax on wages"
  ]
};
