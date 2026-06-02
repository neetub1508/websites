import type { StateInfo } from './types';
import { CAP } from '../tax';

export const SOUTH_CAROLINA: StateInfo = {
  "code": "SC",
  "name": "South Carolina",
  "slug": "south-carolina",
  "hasIncomeTax": true,
  "taxSummary": "0% – 6%",
  "standardDeduction": {
    "single": 15000,
    "married": 30000
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 3560
      },
      {
        "rate": 0.03,
        "upTo": 17830
      },
      {
        "rate": 0.06,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 3560
      },
      {
        "rate": 0.03,
        "upTo": 17830
      },
      {
        "rate": 0.06,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "South Carolina taxes wage income on a graduated scale that tops out at a modest 6% for tax year 2025, down from 6.2% the prior year. Because the state begins with federal taxable income, lower earners can fall into the 0% bracket, but the top rate kicks in at a relatively low threshold of $17,830, so most middle-income workers pay close to the top marginal rate. There are no local or municipal income taxes anywhere in South Carolina, so your take-home pay reflects only state withholding on top of federal taxes.",
  "highlights": [
    "The 2025 top marginal individual income tax rate dropped to 6%, from 6.2% in 2024",
    "The same brackets apply to all filing statuses: 0% up to $3,560, 3% to $17,830, and 6% above",
    "South Carolina conforms to the federal standard deduction ($15,000 single / $30,000 married filing jointly for 2025) since it starts from federal taxable income"
  ]
};
