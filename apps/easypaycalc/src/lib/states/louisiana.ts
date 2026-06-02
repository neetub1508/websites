import type { StateInfo } from './types';
import { CAP } from '../tax';

export const LOUISIANA: StateInfo = {
  "code": "LA",
  "name": "Louisiana",
  "slug": "louisiana",
  "hasIncomeTax": true,
  "taxSummary": "Flat 3%",
  "standardDeduction": {
    "single": 12500,
    "married": 25000
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
  "intro": "Beginning with the 2025 tax year, Louisiana scrapped its old graduated brackets (1.85%-4.25%) in favor of a single flat 3% income tax rate, one of the lowest among states that tax income. Paired with a generous $12,500 single / $25,000 joint standard deduction, this lets most Louisiana workers keep a larger share of their paycheck than under the prior system. There are no city or parish income taxes, so 3% is the only income-tax bite on wages statewide.",
  "highlights": [
    "Louisiana applies a single flat 3% individual income tax rate for 2025, replacing the former 1.85%-4.25% graduated brackets.",
    "The standard deduction rose sharply to $12,500 for single filers and $25,000 for married couples filing jointly, indexed for inflation starting in 2026.",
    "No Louisiana parishes or cities levy a local income tax, and the state imposes no separate wage payroll tax such as SDI or paid family leave."
  ]
};
