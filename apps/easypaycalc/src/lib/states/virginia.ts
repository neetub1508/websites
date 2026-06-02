import type { StateInfo } from './types';
import { CAP } from '../tax';

export const VIRGINIA: StateInfo = {
  "code": "VA",
  "name": "Virginia",
  "slug": "virginia",
  "hasIncomeTax": true,
  "taxSummary": "2% – 5.75%",
  "standardDeduction": {
    "single": 8750,
    "married": 17500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.02,
        "upTo": 3000
      },
      {
        "rate": 0.03,
        "upTo": 5000
      },
      {
        "rate": 0.05,
        "upTo": 17000
      },
      {
        "rate": 0.0575,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.02,
        "upTo": 3000
      },
      {
        "rate": 0.03,
        "upTo": 5000
      },
      {
        "rate": 0.05,
        "upTo": 17000
      },
      {
        "rate": 0.0575,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Virginia taxes wage income on a graduated scale from 2% to 5.75%, but the top rate kicks in at just $17,000 of taxable income, so most workers effectively pay close to the 5.75% marginal rate. There are no city or county income taxes in Virginia, which keeps take-home pay simpler than in neighboring jurisdictions like Washington, D.C. or Maryland. The 2025 standard deduction rose to $8,750 for single filers and $17,500 for joint filers, modestly increasing take-home pay versus prior years.",
  "highlights": [
    "Virginia's brackets are not the same for single and married filers, but both reach the top 5.75% rate at only $17,000 of taxable income",
    "The 2025 standard deduction increased to $8,750 (single) and $17,500 (married filing jointly), up from $8,500/$17,000 in 2024",
    "No Virginia city or county levies a separate local income tax, unlike many neighboring states"
  ]
};
