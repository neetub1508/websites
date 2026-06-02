import type { StateInfo } from './types';
import { CAP } from '../tax';

export const KENTUCKY: StateInfo = {
  "code": "KY",
  "name": "Kentucky",
  "slug": "kentucky",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4%",
  "standardDeduction": {
    "single": 3270,
    "married": 3270
  },
  "brackets": {
    "single": [
      {
        "rate": 0.04,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.04,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Kentucky levies a flat 4% income tax on all taxable wage income for the 2025 tax year, regardless of how much you earn or your filing status. While the statewide rate is modest and simpler than the graduated systems used by many neighbors, many Kentucky cities and counties impose separate local occupational license taxes on wages that further reduce take-home pay. The state rate is also scheduled to drop to 3.5% in 2026, continuing a gradual reduction of Kentucky's flat tax.",
  "highlights": [
    "Flat 4% individual income tax for 2025, applied uniformly to all income levels and filing statuses",
    "2025 standard deduction of $3,270, the same amount for single filers and married couples filing jointly, indexed annually for inflation",
    "Local occupational license taxes on wages (roughly 0.5% to 2.5%) are levied by many cities and counties on top of the state rate"
  ],
  "localNote": "Many Kentucky cities and counties impose local occupational license taxes (payroll taxes) on wages earned within their jurisdiction, generally ranging from about 0.5% to 2.5%. These are administered locally, separate from the state income tax, and not reported on the Kentucky state return."
};
