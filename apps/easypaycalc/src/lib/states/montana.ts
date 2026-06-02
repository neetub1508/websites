import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MONTANA: StateInfo = {
  "code": "MT",
  "name": "Montana",
  "slug": "montana",
  "hasIncomeTax": true,
  "taxSummary": "4.7% – 5.9%",
  "standardDeduction": {
    "single": 15750,
    "married": 31500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.047,
        "upTo": 21100
      },
      {
        "rate": 0.059,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.047,
        "upTo": 42200
      },
      {
        "rate": 0.059,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Montana taxes wage income under a streamlined two-bracket system, with most earners paying a top marginal rate of 5.9% after a relatively low bracket threshold. There are no city or county income taxes anywhere in Montana, so your state withholding is the only state-level bite on your paycheck. Compared with high-tax states, Montana's top rate is moderate, and its standard deduction now mirrors the generous federal amount, which boosts take-home pay relative to states with smaller deductions.",
  "highlights": [
    "Montana uses just two brackets for 2025: 4.7% on the first portion of income and 5.9% above it (single: $21,100; married filing jointly: $42,200).",
    "Since the 2024 reform, Montana starts from federal taxable income, so it effectively adopts the federal standard deduction ($15,750 single / $31,500 married for 2025).",
    "No Montana city or county levies a local income tax, so 5.9% is the maximum combined state-and-local wage tax rate."
  ]
};
