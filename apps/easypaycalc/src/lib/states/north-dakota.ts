import type { StateInfo } from './types';
import { CAP } from '../tax';

export const NORTH_DAKOTA: StateInfo = {
  "code": "ND",
  "name": "North Dakota",
  "slug": "north-dakota",
  "hasIncomeTax": true,
  "taxSummary": "0% – 2.5%",
  "standardDeduction": {
    "single": 15000,
    "married": 30000
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 48475
      },
      {
        "rate": 0.0195,
        "upTo": 244825
      },
      {
        "rate": 0.025,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 80975
      },
      {
        "rate": 0.0195,
        "upTo": 298075
      },
      {
        "rate": 0.025,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "North Dakota has one of the lowest state income tax burdens in the nation, with a top marginal rate of just 2.5% and a generous 0% bracket that exempts the first $48,475 of taxable income for single filers ($80,975 for joint filers). Because there are no local city or county income taxes anywhere in the state, your North Dakota paycheck keeps far more of each dollar than in high-tax states. The state's standard deduction mirrors the federal amount, further shrinking taxable income for most wage earners.",
  "highlights": [
    "A 0% first bracket exempts the first $48,475 of taxable income for single filers and $80,975 for married couples filing jointly",
    "The top marginal rate is just 2.5%, among the lowest of any state that taxes income",
    "North Dakota imposes no local income taxes and uses the federal standard deduction ($15,000 single / $30,000 married in 2025)"
  ]
};
