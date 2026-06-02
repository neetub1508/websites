import type { StateInfo } from './types';
import { CAP } from '../tax';

export const WEST_VIRGINIA: StateInfo = {
  "code": "WV",
  "name": "West Virginia",
  "slug": "west-virginia",
  "hasIncomeTax": true,
  "taxSummary": "2.22% – 4.82%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0222,
        "upTo": 10000
      },
      {
        "rate": 0.0296,
        "upTo": 25000
      },
      {
        "rate": 0.0333,
        "upTo": 40000
      },
      {
        "rate": 0.0444,
        "upTo": 60000
      },
      {
        "rate": 0.0482,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0222,
        "upTo": 10000
      },
      {
        "rate": 0.0296,
        "upTo": 25000
      },
      {
        "rate": 0.0333,
        "upTo": 40000
      },
      {
        "rate": 0.0444,
        "upTo": 60000
      },
      {
        "rate": 0.0482,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "West Virginia taxes wage income with a graduated rate that tops out at a relatively modest 4.82% for 2025, after a series of legislated cuts trimmed rates from prior years. There are no city or county income taxes, so your state withholding is the only income-based deduction on a West Virginia paycheck. Combined with a low top rate, take-home pay in West Virginia tends to be higher than in higher-tax neighbors like Maryland or Ohio's municipalities.",
  "highlights": [
    "Five graduated brackets ranging from 2.22% on the first $10,000 to 4.82% on income above $60,000, identical for single and married-filing-jointly filers",
    "West Virginia offers no standard deduction; instead it provides a personal exemption of $2,000 per allowance ($500 if zero exemptions are claimed)",
    "Rates were reduced effective January 1, 2025, continuing the multi-year income tax cuts that lowered the former top rate of 6.5%"
  ],
  "localNote": "West Virginia has no municipal or county income taxes. Some cities levy a flat per-employee \"city service fee\" (e.g., Charleston, Huntington, Morgantown), but these are fixed weekly fees, not income-based taxes."
};
