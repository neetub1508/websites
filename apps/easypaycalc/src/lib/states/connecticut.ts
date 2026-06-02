import type { StateInfo } from './types';
import { CAP } from '../tax';

export const CONNECTICUT: StateInfo = {
  "code": "CT",
  "name": "Connecticut",
  "slug": "connecticut",
  "hasIncomeTax": true,
  "taxSummary": "2% – 6.99%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.02,
        "upTo": 10000
      },
      {
        "rate": 0.045,
        "upTo": 50000
      },
      {
        "rate": 0.055,
        "upTo": 100000
      },
      {
        "rate": 0.06,
        "upTo": 200000
      },
      {
        "rate": 0.065,
        "upTo": 250000
      },
      {
        "rate": 0.069,
        "upTo": 500000
      },
      {
        "rate": 0.0699,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.02,
        "upTo": 20000
      },
      {
        "rate": 0.045,
        "upTo": 100000
      },
      {
        "rate": 0.055,
        "upTo": 200000
      },
      {
        "rate": 0.06,
        "upTo": 400000
      },
      {
        "rate": 0.065,
        "upTo": 500000
      },
      {
        "rate": 0.069,
        "upTo": 1000000
      },
      {
        "rate": 0.0699,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Connecticut levies a progressive state income tax with seven brackets running from 2% to 6.99%, putting it in the middle-to-upper range of states that tax wages. There are no city or county income taxes in Connecticut, so your state withholding is the only state-level income tax cut from your paycheck. Higher earners can effectively pay their top rate on all income because of the state's \"tax benefit recapture\" rules, making Connecticut take-home pay noticeably tighter at the top end than in flat-tax states.",
  "highlights": [
    "Seven graduated brackets from 2% up to a top marginal rate of 6.99% for 2025",
    "No standard deduction; Connecticut instead uses a personal exemption (up to $15,000 single / $24,000 joint) that phases out as income rises",
    "Tax benefit recapture can make high earners pay the top 6.99% rate on all of their income, not just amounts above the threshold"
  ]
};
