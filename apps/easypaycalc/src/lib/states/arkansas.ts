import type { StateInfo } from './types';
import { CAP } from '../tax';

export const ARKANSAS: StateInfo = {
  "code": "AR",
  "name": "Arkansas",
  "slug": "arkansas",
  "hasIncomeTax": true,
  "taxSummary": "0% – 3.9%",
  "standardDeduction": {
    "single": 2410,
    "married": 4820
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 5599
      },
      {
        "rate": 0.02,
        "upTo": 11199
      },
      {
        "rate": 0.03,
        "upTo": 15999
      },
      {
        "rate": 0.034,
        "upTo": 26399
      },
      {
        "rate": 0.039,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 5599
      },
      {
        "rate": 0.02,
        "upTo": 11199
      },
      {
        "rate": 0.03,
        "upTo": 15999
      },
      {
        "rate": 0.034,
        "upTo": 26399
      },
      {
        "rate": 0.039,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Arkansas keeps a relatively light bite on take-home pay, with a top marginal income tax rate of just 3.9% for 2025 — down from 4.4% a year earlier after the state accelerated its rate cuts. Income up to $5,599 is taxed at 0%, and the brackets are indexed annually for inflation, so most middle earners face an effective rate well below the headline top rate. There are no city or county income taxes in Arkansas, so your state withholding is the only state-level deduction from your paycheck.",
  "highlights": [
    "Top marginal rate of 3.9% for tax year 2025, reduced from 4.4% under Act 1 of the 2024 Second Extraordinary Session",
    "The first $5,599 of net taxable income is taxed at 0%, with intermediate rates of 2%, 3%, and 3.4% before the 3.9% top rate kicks in at $26,400",
    "No local (city or county) income taxes anywhere in Arkansas, and bracket thresholds are indexed annually for inflation"
  ]
};
