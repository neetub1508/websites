import type { StateInfo } from './types';
import { CAP } from '../tax';

export const ALABAMA: StateInfo = {
  "code": "AL",
  "name": "Alabama",
  "slug": "alabama",
  "hasIncomeTax": true,
  "taxSummary": "2% – 5%",
  "standardDeduction": {
    "single": 3000,
    "married": 8500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.02,
        "upTo": 500
      },
      {
        "rate": 0.04,
        "upTo": 3000
      },
      {
        "rate": 0.05,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.02,
        "upTo": 1000
      },
      {
        "rate": 0.04,
        "upTo": 6000
      },
      {
        "rate": 0.05,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Alabama keeps state income tax relatively low, with a graduated structure topping out at just 5% — well below many higher-tax states. Because the top 5% rate kicks in at only $3,000 of taxable income for singles, most workers effectively pay close to that flat 5% on the bulk of their wages. Several Alabama cities add a local occupational tax, which can modestly reduce take-home pay beyond the state levy.",
  "highlights": [
    "Graduated rates of 2%, 4%, and 5%, with the top 5% bracket starting at just $3,000 of taxable income for single filers ($6,000 for joint filers).",
    "Income-based standard deduction of up to $3,000 for single filers and $8,500 for married couples filing jointly.",
    "Alabama is one of the few states that lets taxpayers deduct federal income taxes paid from their state taxable income."
  ],
  "localNote": "Some Alabama municipalities levy a local occupational (wage) tax withheld from pay — for example Birmingham (1%), Bessemer, Gadsden, and others. These city occupational taxes apply to wages earned within the jurisdiction."
};
