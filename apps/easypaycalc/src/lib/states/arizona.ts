import type { StateInfo } from './types';
import { CAP } from '../tax';

export const ARIZONA: StateInfo = {
  "code": "AZ",
  "name": "Arizona",
  "slug": "arizona",
  "hasIncomeTax": true,
  "taxSummary": "Flat 2.5%",
  "standardDeduction": {
    "single": 15750,
    "married": 31500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.025,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.025,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Arizona levies a flat 2.5% individual income tax, one of the lowest flat rates in the nation, so take-home pay is relatively high regardless of how much you earn. There are no city or county income taxes, meaning a single statewide rate applies everywhere in the state. Compared with progressive-rate states, Arizona's simple flat structure keeps the tax bite the same for high and low earners alike.",
  "highlights": [
    "Arizona applies a single flat 2.5% income tax rate to all taxpayers regardless of income or filing status",
    "The 2025 standard deduction is $15,750 for single filers and $31,500 for married couples filing jointly, conforming to the federal amounts",
    "No Arizona cities or counties impose a local income tax, and there is no state-level wage payroll tax such as disability insurance"
  ]
};
