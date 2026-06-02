import type { StateInfo } from './types';
import { CAP } from '../tax';

export const OREGON: StateInfo = {
  "code": "OR",
  "name": "Oregon",
  "slug": "oregon",
  "hasIncomeTax": true,
  "taxSummary": "4.75% – 9.9%",
  "standardDeduction": {
    "single": 2835,
    "married": 5670
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0475,
        "upTo": 4400
      },
      {
        "rate": 0.0675,
        "upTo": 11050
      },
      {
        "rate": 0.0875,
        "upTo": 125000
      },
      {
        "rate": 0.099,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0475,
        "upTo": 8800
      },
      {
        "rate": 0.0675,
        "upTo": 22100
      },
      {
        "rate": 0.0875,
        "upTo": 250000
      },
      {
        "rate": 0.099,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "Statewide Transit Tax",
      "rate": 0.001
    }
  ],
  "intro": "Oregon levies one of the nation's highest top marginal income tax rates, climbing to 9.9% on wage income, with no offsetting state sales tax. Because the brackets are steep and reach the top rate at relatively modest income levels, take-home pay for higher earners is noticeably lower than in most states. Workers in the Portland metro area also face additional local income taxes that further reduce net pay.",
  "highlights": [
    "Top marginal rate of 9.9% is among the highest in the United States and kicks in at just $125,000 for single filers",
    "Oregon has no statewide sales tax, partially offsetting its high income tax burden",
    "A 0.1% statewide transit tax is withheld from virtually all Oregon wages with no wage cap"
  ],
  "localNote": "Portland-metro residents and workers may owe additional local income taxes: the Metro Supportive Housing Services tax (1% on taxable income over $125,000 single / $200,000 joint) and the Multnomah County Preschool for All tax (1.5% over $125,000 single / $200,000 joint, plus an extra 1.5% over $250,000 single / $400,000 joint). The TriMet and Lane transit payroll taxes are employer-paid."
};
