import type { StateInfo } from './types';
import { CAP } from '../tax';

export const NORTH_CAROLINA: StateInfo = {
  "code": "NC",
  "name": "North Carolina",
  "slug": "north-carolina",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4.25%",
  "standardDeduction": {
    "single": 12750,
    "married": 25500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0425,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0425,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "North Carolina taxes wage income at a single flat rate of 4.25% for the 2025 tax year, down from 4.5% in 2024 as part of a multi-year phase-down toward 3.99%. A generous standard deduction of $12,750 for single filers and $25,500 for married couples shields the first chunk of earnings, so effective rates land well below the headline figure. Because the state imposes no local income taxes, your take-home pay is the same flat percentage whether you live in Charlotte, Raleigh, or a rural county.",
  "highlights": [
    "Flat 4.25% income tax rate for 2025, reduced from 4.5% the prior year",
    "Standard deduction of $12,750 (single) and $25,500 (married filing jointly), with no personal exemptions",
    "No city or county income taxes anywhere in the state"
  ]
};
