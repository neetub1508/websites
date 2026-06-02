import type { StateInfo } from './types';
import { CAP } from '../tax';

export const COLORADO: StateInfo = {
  "code": "CO",
  "name": "Colorado",
  "slug": "colorado",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4.4%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.044,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.044,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Colorado levies a single flat 4.4% income tax for the 2025 tax year, so every worker pays the same marginal rate regardless of how much they earn. Because Colorado starts from your federal taxable income, the federal standard deduction effectively shields the first slice of pay, and there is no separate state standard deduction. The flat rate keeps take-home pay predictable and is lower than the top brackets found in most progressive-tax states.",
  "highlights": [
    "Flat 4.4% rate applies to all income levels for tax year 2025, the same for single and married-filing-jointly filers",
    "Colorado has no state standard deduction because it taxes federal taxable income, which already reflects the federal standard or itemized deductions",
    "No local or city income taxes on wages, though some cities like Denver and Greenwood Village charge flat-dollar Occupational Privilege (head) taxes"
  ],
  "localNote": "Colorado has no local percentage income tax on wages, but several cities impose a flat-dollar monthly Occupational Privilege Tax (OPT, or \"head tax\") on workers earning above a threshold: Denver ($5.75/month employee portion on $500+ monthly wages), Greenwood Village ($2/month on $250+), Glendale, and Sheridan. Aurora repealed its OPT effective January 1, 2025."
};
