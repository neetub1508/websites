import type { StateInfo } from './types';
import { CAP } from '../tax';

export const INDIANA: StateInfo = {
  "code": "IN",
  "name": "Indiana",
  "slug": "indiana",
  "hasIncomeTax": true,
  "taxSummary": "Flat 3.0%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.03,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.03,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Indiana levies a flat 3.0% individual income tax for the 2025 tax year, one of the lowest flat rates among states with an income tax. On top of the state rate, every Indiana county imposes its own local income tax, so actual take-home pay depends heavily on the county where you live. Because the state rate is flat and modest, high earners often keep more of their pay than they would in progressive-bracket states.",
  "highlights": [
    "Indiana applies a single flat 3.0% rate to all taxable income for 2025, down from 3.05% in 2024.",
    "Indiana has no standard deduction; instead it uses personal exemptions of $1,000 for single filers and $2,000 for married filing jointly.",
    "The state rate is scheduled to drop further to 2.95% in 2026 and 2.9% in 2027 under H.B. 1001."
  ],
  "localNote": "All 92 Indiana counties impose a local county income tax in addition to the state rate, with rates roughly ranging from about 0.5% to 3.0% depending on the county of residence. The applicable county rate is determined by where the taxpayer lives (or works, for nonresidents) as of January 1."
};
