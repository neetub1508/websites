import type { StateInfo } from './types';
import { CAP } from '../tax';

export const ILLINOIS: StateInfo = {
  "code": "IL",
  "name": "Illinois",
  "slug": "illinois",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4.95%",
  "standardDeduction": {
    "single": 2850,
    "married": 5700
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0495,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0495,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Illinois levies a single flat income tax of 4.95% on all taxable income, so high and low earners face the same marginal rate. There are no county or municipal income taxes, meaning your take-home pay is not further reduced at the local level. Because the rate is moderate and flat, Illinois sits in the middle of the pack compared with graduated-rate states.",
  "highlights": [
    "Flat 4.95% income tax rate applies to all taxable income regardless of filing status or income level",
    "No standard deduction; instead a $2,850 personal exemption per taxpayer and dependent for 2025 (phased out above $250,000 single / $500,000 married AGI)",
    "Illinois does not tax retirement income such as Social Security, pensions, or 401(k) and IRA distributions"
  ]
};
