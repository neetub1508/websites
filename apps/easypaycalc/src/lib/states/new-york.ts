import type { StateInfo } from './types';
import { CAP } from '../tax';

export const NEW_YORK: StateInfo = {
  "code": "NY",
  "name": "New York",
  "slug": "new-york",
  "hasIncomeTax": true,
  "taxSummary": "4% – 10.9%",
  "standardDeduction": {
    "single": 8000,
    "married": 16050
  },
  "brackets": {
    "single": [
      {
        "rate": 0.04,
        "upTo": 8500
      },
      {
        "rate": 0.045,
        "upTo": 11700
      },
      {
        "rate": 0.0525,
        "upTo": 13900
      },
      {
        "rate": 0.055,
        "upTo": 80650
      },
      {
        "rate": 0.06,
        "upTo": 215400
      },
      {
        "rate": 0.0685,
        "upTo": 1077550
      },
      {
        "rate": 0.0965,
        "upTo": 5000000
      },
      {
        "rate": 0.103,
        "upTo": 25000000
      },
      {
        "rate": 0.109,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.04,
        "upTo": 17150
      },
      {
        "rate": 0.045,
        "upTo": 23600
      },
      {
        "rate": 0.0525,
        "upTo": 27900
      },
      {
        "rate": 0.055,
        "upTo": 161550
      },
      {
        "rate": 0.06,
        "upTo": 323200
      },
      {
        "rate": 0.0685,
        "upTo": 2155350
      },
      {
        "rate": 0.0965,
        "upTo": 5000000
      },
      {
        "rate": 0.103,
        "upTo": 25000000
      },
      {
        "rate": 0.109,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "Paid Family Leave (PFL)",
      "rate": 0.00388,
      "wageBase": 91373
    },
    {
      "name": "State Disability Insurance (SDI)",
      "rate": 0.005,
      "wageBase": 6240
    }
  ],
  "intro": "New York imposes a progressive income tax with nine brackets ranging from 4% to 10.9%, placing it among the higher-tax states for top earners while remaining moderate for middle incomes. Residents of New York City and Yonkers also owe a separate local income tax, which can meaningfully reduce take-home pay beyond the statewide rates. High earners face a tax benefit recapture that can apply the top marginal rate to all income rather than just the amount above each threshold.",
  "highlights": [
    "Nine marginal brackets run from 4% up to a 10.9% top rate on taxable income above $25 million.",
    "The 2025 standard deduction is $8,000 for single filers and $16,050 for married couples filing jointly.",
    "New York City and Yonkers levy their own resident income taxes on top of the state tax."
  ],
  "localNote": "New York City residents pay a separate city income tax with 2025 rates of roughly 3.078% to 3.876%, and Yonkers residents pay a surcharge of about 16.75% of their net state tax. These local taxes are administered through the state return but apply only to residents of those localities."
};
