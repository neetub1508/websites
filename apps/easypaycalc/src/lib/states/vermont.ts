import type { StateInfo } from './types';
import { CAP } from '../tax';

export const VERMONT: StateInfo = {
  "code": "VT",
  "name": "Vermont",
  "slug": "vermont",
  "hasIncomeTax": true,
  "taxSummary": "3.35% – 8.75%",
  "standardDeduction": {
    "single": 7650,
    "married": 15300
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0335,
        "upTo": 49400
      },
      {
        "rate": 0.066,
        "upTo": 119700
      },
      {
        "rate": 0.076,
        "upTo": 249700
      },
      {
        "rate": 0.0875,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0335,
        "upTo": 75000
      },
      {
        "rate": 0.066,
        "upTo": 199450
      },
      {
        "rate": 0.076,
        "upTo": 304000
      },
      {
        "rate": 0.0875,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Vermont taxes wage income under a progressive system with four brackets running from 3.35% up to a high top rate of 8.75%, one of the steepest top marginal rates in the country. There are no city or county income taxes and no separate state payroll withholdings, so your paycheck deductions come solely from the state income tax plus federal taxes. Combined with a relatively modest standard deduction, take-home pay in Vermont tends to be lower than in lower-tax New England neighbors like New Hampshire, which levies no tax on wages.",
  "highlights": [
    "Top marginal rate of 8.75% kicks in above $249,700 for single filers and $304,000 for married couples filing jointly",
    "2025 standard deduction is $7,650 for single filers and $15,300 for married couples filing jointly, plus a $5,300 personal exemption per person",
    "No local or municipal income taxes and no state-level payroll deductions such as SDI or paid family leave"
  ]
};
