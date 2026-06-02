import type { StateInfo } from './types';
import { CAP } from '../tax';

export const HAWAII: StateInfo = {
  "code": "HI",
  "name": "Hawaii",
  "slug": "hawaii",
  "hasIncomeTax": true,
  "taxSummary": "1.4% – 11%",
  "standardDeduction": {
    "single": 4400,
    "married": 8800
  },
  "brackets": {
    "single": [
      {
        "rate": 0.014,
        "upTo": 9600
      },
      {
        "rate": 0.032,
        "upTo": 14400
      },
      {
        "rate": 0.055,
        "upTo": 19200
      },
      {
        "rate": 0.064,
        "upTo": 24000
      },
      {
        "rate": 0.068,
        "upTo": 36000
      },
      {
        "rate": 0.072,
        "upTo": 48000
      },
      {
        "rate": 0.076,
        "upTo": 125000
      },
      {
        "rate": 0.079,
        "upTo": 175000
      },
      {
        "rate": 0.0825,
        "upTo": 225000
      },
      {
        "rate": 0.09,
        "upTo": 275000
      },
      {
        "rate": 0.1,
        "upTo": 325000
      },
      {
        "rate": 0.11,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.014,
        "upTo": 19200
      },
      {
        "rate": 0.032,
        "upTo": 28800
      },
      {
        "rate": 0.055,
        "upTo": 38400
      },
      {
        "rate": 0.064,
        "upTo": 48000
      },
      {
        "rate": 0.068,
        "upTo": 72000
      },
      {
        "rate": 0.072,
        "upTo": 96000
      },
      {
        "rate": 0.076,
        "upTo": 250000
      },
      {
        "rate": 0.079,
        "upTo": 350000
      },
      {
        "rate": 0.0825,
        "upTo": 450000
      },
      {
        "rate": 0.09,
        "upTo": 550000
      },
      {
        "rate": 0.1,
        "upTo": 650000
      },
      {
        "rate": 0.11,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "Temporary Disability Insurance (TDI)",
      "rate": 0.005,
      "wageBase": 74969
    }
  ],
  "intro": "Hawaii has one of the most progressive income tax structures in the nation, with 12 brackets topping out at an 11% marginal rate — among the highest of any U.S. state. Most workers fall into the 7.6% bracket, so middle-income take-home pay is noticeably reduced compared to flat-tax or no-tax states. There are no city or county income taxes, so the state income tax is the only income tax on your wages — though a small Temporary Disability Insurance (TDI) contribution may also be withheld.",
  "highlights": [
    "12 marginal brackets ranging from 1.4% up to a top rate of 11% — one of the highest top rates in the country",
    "Standard deduction was doubled for 2024-2025 under H.B. 2404 (Act 46, SLH 2024) to $4,400 (single) and $8,800 (married filing jointly)",
    "No local or county income taxes apply anywhere in Hawaii",
    "Employees may have up to 0.5% of weekly wages withheld for state Temporary Disability Insurance (TDI), capped at $7.21/week ($374.92/year) for 2025"
  ],
  "localNote": "Hawaii employers may withhold up to half the cost of Temporary Disability Insurance (TDI), not exceeding 0.5% of weekly wages and capped at $7.21 per week ($374.92 per year) for 2025 on a maximum weekly wage base of $1,441.72. TDI is a mandatory state insurance contribution, not an income tax."
};
