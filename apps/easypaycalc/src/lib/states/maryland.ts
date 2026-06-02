import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MARYLAND: StateInfo = {
  "code": "MD",
  "name": "Maryland",
  "slug": "maryland",
  "hasIncomeTax": true,
  "taxSummary": "2% – 6.5%",
  "standardDeduction": {
    "single": 3350,
    "married": 6700
  },
  "brackets": {
    "single": [
      {
        "rate": 0.02,
        "upTo": 1000
      },
      {
        "rate": 0.03,
        "upTo": 2000
      },
      {
        "rate": 0.04,
        "upTo": 3000
      },
      {
        "rate": 0.0475,
        "upTo": 100000
      },
      {
        "rate": 0.05,
        "upTo": 125000
      },
      {
        "rate": 0.0525,
        "upTo": 150000
      },
      {
        "rate": 0.055,
        "upTo": 250000
      },
      {
        "rate": 0.0575,
        "upTo": 500000
      },
      {
        "rate": 0.0625,
        "upTo": 1000000
      },
      {
        "rate": 0.065,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.02,
        "upTo": 1000
      },
      {
        "rate": 0.03,
        "upTo": 2000
      },
      {
        "rate": 0.04,
        "upTo": 3000
      },
      {
        "rate": 0.0475,
        "upTo": 150000
      },
      {
        "rate": 0.05,
        "upTo": 175000
      },
      {
        "rate": 0.0525,
        "upTo": 225000
      },
      {
        "rate": 0.055,
        "upTo": 300000
      },
      {
        "rate": 0.0575,
        "upTo": 600000
      },
      {
        "rate": 0.0625,
        "upTo": 1200000
      },
      {
        "rate": 0.065,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Maryland's state income tax is moderately progressive, running from 2% to a new top rate of 6.5% for 2025, but the real bite on take-home pay comes from the mandatory local \"piggyback\" income tax that every county and Baltimore City charges on top of the state rate. Combined state-plus-local rates can reach roughly 9.8%, which makes Maryland's effective wage tax burden noticeably higher than the headline state rate suggests. Two new high-income brackets (6.25% and 6.5%) were added effective January 1, 2025, raising taxes on earners above $500,000.",
  "highlights": [
    "The 2025 Budget Reconciliation and Financing Act added two new top brackets — 6.25% on income above $500,000 (single)/$600,000 (joint) and 6.5% above $1,000,000 (single)/$1,200,000 (joint).",
    "The standard deduction was raised and the old income-based phase-in eliminated, reaching $3,350 for single filers and $6,700 for married-filing-jointly filers, with future indexing to inflation.",
    "Every Maryland county and Baltimore City levies a local income tax, ranging from about 2.25% up to a new maximum of 3.30%, layered on top of the state rate."
  ],
  "localNote": "All 23 Maryland counties and Baltimore City impose a mandatory local \"piggyback\" income tax on residents' Maryland taxable income, ranging from roughly 2.25% to a maximum of 3.30% (raised from 3.20% effective tax year 2025). Rates vary by county of residence (for example, Dorchester County moved to 3.30% for 2025, and Anne Arundel uses a progressive three-bracket local structure). These local taxes are collected with the state return."
};
