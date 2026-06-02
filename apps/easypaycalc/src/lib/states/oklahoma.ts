import type { StateInfo } from './types';
import { CAP } from '../tax';

export const OKLAHOMA: StateInfo = {
  "code": "OK",
  "name": "Oklahoma",
  "slug": "oklahoma",
  "hasIncomeTax": true,
  "taxSummary": "0.25% – 4.75%",
  "standardDeduction": {
    "single": 6350,
    "married": 12700
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0025,
        "upTo": 1000
      },
      {
        "rate": 0.0075,
        "upTo": 2500
      },
      {
        "rate": 0.0175,
        "upTo": 3750
      },
      {
        "rate": 0.0275,
        "upTo": 4900
      },
      {
        "rate": 0.0375,
        "upTo": 7200
      },
      {
        "rate": 0.0475,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0025,
        "upTo": 2000
      },
      {
        "rate": 0.0075,
        "upTo": 5000
      },
      {
        "rate": 0.0175,
        "upTo": 7500
      },
      {
        "rate": 0.0275,
        "upTo": 9800
      },
      {
        "rate": 0.0375,
        "upTo": 14400
      },
      {
        "rate": 0.0475,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Oklahoma takes a modest bite out of your paycheck, with a graduated income tax that tops out at just 4.75% — among the lower top rates in states that tax wages. The brackets are compressed, so most workers reach the top 4.75% marginal rate at very low income levels ($7,200 for singles, $14,400 for joint filers), meaning the bulk of a typical salary is effectively taxed near that top rate. There are no city or county income taxes in Oklahoma, so your state withholding is all you pay beyond federal taxes.",
  "highlights": [
    "Top marginal rate is 4.75%, reached at just $7,200 of taxable income for single filers and $14,400 for married filing jointly",
    "Standard deduction is $6,350 for single filers and $12,700 for married filing jointly, plus a $1,000 personal exemption per person",
    "Beginning tax year 2026, House Bill 2764 cuts the top rate to 4.50% and collapses the six brackets into three"
  ]
};
