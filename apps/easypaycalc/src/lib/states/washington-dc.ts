import type { StateInfo } from './types';
import { CAP } from '../tax';

export const WASHINGTON_DC: StateInfo = {
  "code": "DC",
  "name": "District of Columbia",
  "slug": "washington-dc",
  "hasIncomeTax": true,
  "taxSummary": "4% – 10.75%",
  "standardDeduction": {
    "single": 15000,
    "married": 30000
  },
  "brackets": {
    "single": [
      {
        "rate": 0.04,
        "upTo": 10000
      },
      {
        "rate": 0.06,
        "upTo": 40000
      },
      {
        "rate": 0.065,
        "upTo": 60000
      },
      {
        "rate": 0.085,
        "upTo": 250000
      },
      {
        "rate": 0.0925,
        "upTo": 500000
      },
      {
        "rate": 0.0975,
        "upTo": 1000000
      },
      {
        "rate": 0.1075,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.04,
        "upTo": 10000
      },
      {
        "rate": 0.06,
        "upTo": 40000
      },
      {
        "rate": 0.065,
        "upTo": 60000
      },
      {
        "rate": 0.085,
        "upTo": 250000
      },
      {
        "rate": 0.0925,
        "upTo": 500000
      },
      {
        "rate": 0.0975,
        "upTo": 1000000
      },
      {
        "rate": 0.1075,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "The District of Columbia levies a steeply progressive income tax with rates climbing from 4% to 10.75%, giving it one of the highest top marginal rates in the nation. Because DC is a single jurisdiction, there are no separate city or county income taxes layered on top, but its top rate exceeds that of most states. High earners see noticeably smaller take-home pay than residents of neighboring no- or low-tax areas, while moderate earners benefit from a generous $15,000 standard deduction.",
  "highlights": [
    "Seven progressive brackets ranging from 4% to a 10.75% top rate on income over $1,000,000",
    "Standard deduction of $15,000 for single filers and $30,000 for married couples filing jointly",
    "Bracket thresholds are identical for single and married-filing-jointly filers"
  ]
};
