import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MISSISSIPPI: StateInfo = {
  "code": "MS",
  "name": "Mississippi",
  "slug": "mississippi",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4.4%",
  "standardDeduction": {
    "single": 2300,
    "married": 4600
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 10000
      },
      {
        "rate": 0.044,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 10000
      },
      {
        "rate": 0.044,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Mississippi has moved to a flat individual income tax, with a 4.4% rate for the 2025 tax year applied only to taxable income above $10,000 — the first $10,000 is effectively untaxed. This places Mississippi among the lower-taxed states, and unlike many flat-tax peers its rate is scheduled to keep falling toward eventual elimination. There are no city or county income taxes, so your paycheck withholding reflects only the single statewide rate.",
  "highlights": [
    "Flat 4.4% rate for 2025, down from 4.7% in 2024 under the Build Up Mississippi Act",
    "First $10,000 of taxable income is exempt from tax (taxed at 0%)",
    "Standard deduction is $2,300 for single filers and $4,600 for married filing jointly"
  ]
};
