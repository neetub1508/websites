import type { StateInfo } from './types';
import { CAP } from '../tax';

export const NEW_JERSEY: StateInfo = {
  "code": "NJ",
  "name": "New Jersey",
  "slug": "new-jersey",
  "hasIncomeTax": true,
  "taxSummary": "1.4% – 10.75%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.014,
        "upTo": 20000
      },
      {
        "rate": 0.0175,
        "upTo": 35000
      },
      {
        "rate": 0.035,
        "upTo": 40000
      },
      {
        "rate": 0.05525,
        "upTo": 75000
      },
      {
        "rate": 0.0637,
        "upTo": 500000
      },
      {
        "rate": 0.0897,
        "upTo": 1000000
      },
      {
        "rate": 0.1075,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.014,
        "upTo": 20000
      },
      {
        "rate": 0.0175,
        "upTo": 50000
      },
      {
        "rate": 0.0245,
        "upTo": 70000
      },
      {
        "rate": 0.035,
        "upTo": 80000
      },
      {
        "rate": 0.05525,
        "upTo": 150000
      },
      {
        "rate": 0.0637,
        "upTo": 500000
      },
      {
        "rate": 0.0897,
        "upTo": 1000000
      },
      {
        "rate": 0.1075,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "Temporary Disability Insurance (TDI)",
      "rate": 0.0023,
      "wageBase": 165400
    },
    {
      "name": "Family Leave Insurance (FLI)",
      "rate": 0.0033,
      "wageBase": 165400
    }
  ],
  "intro": "New Jersey takes a meaningful bite out of take-home pay, with a graduated income tax that climbs from a low 1.4% to one of the steepest top rates in the country at 10.75% on income above $1 million. There are no city or county income taxes in New Jersey, so the state rate is the only income tax most workers see, but paychecks also carry small mandatory payroll deductions for state disability and family leave insurance. Combined with a top marginal rate that ranks among the four highest nationally, high earners in New Jersey keep noticeably less than peers in flat-tax or no-tax states.",
  "highlights": [
    "New Jersey's top marginal rate of 10.75% applies to income over $1 million and ranks among the four highest in the nation, behind only California, Hawaii, and New York.",
    "The state offers no standard deduction; instead it provides personal exemptions of $1,000 (single) and $2,000 (married filing jointly).",
    "Employees contribute to mandatory state payroll programs in 2025: Temporary Disability Insurance at 0.23% and Family Leave Insurance at 0.33%, each capped at a $165,400 wage base."
  ]
};
