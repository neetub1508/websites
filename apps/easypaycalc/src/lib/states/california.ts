import type { StateInfo } from './types';
import { CAP } from '../tax';

export const CALIFORNIA: StateInfo = {
  "code": "CA",
  "name": "California",
  "slug": "california",
  "hasIncomeTax": true,
  "taxSummary": "1% – 13.3%",
  "standardDeduction": {
    "single": 5706,
    "married": 11412
  },
  "brackets": {
    "single": [
      {
        "rate": 0.01,
        "upTo": 11079
      },
      {
        "rate": 0.02,
        "upTo": 26264
      },
      {
        "rate": 0.04,
        "upTo": 41452
      },
      {
        "rate": 0.06,
        "upTo": 57542
      },
      {
        "rate": 0.08,
        "upTo": 72724
      },
      {
        "rate": 0.093,
        "upTo": 371479
      },
      {
        "rate": 0.103,
        "upTo": 445771
      },
      {
        "rate": 0.113,
        "upTo": 742953
      },
      {
        "rate": 0.123,
        "upTo": 1000000
      },
      {
        "rate": 0.133,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.01,
        "upTo": 22158
      },
      {
        "rate": 0.02,
        "upTo": 52528
      },
      {
        "rate": 0.04,
        "upTo": 82904
      },
      {
        "rate": 0.06,
        "upTo": 115084
      },
      {
        "rate": 0.08,
        "upTo": 145448
      },
      {
        "rate": 0.093,
        "upTo": 742958
      },
      {
        "rate": 0.103,
        "upTo": 891542
      },
      {
        "rate": 0.113,
        "upTo": 1485906
      },
      {
        "rate": 0.123,
        "upTo": 2000000
      },
      {
        "rate": 0.133,
        "upTo": CAP
      }
    ]
  },
  "extra": [
    {
      "name": "State Disability Insurance (SDI)",
      "rate": 0.012
    }
  ],
  "intro": "California has the highest top marginal income tax rate in the nation, reaching 13.3% on very high earners, so take-home pay for top earners is meaningfully lower than in most states. However, the lowest brackets start at just 1%, so middle-income workers face more moderate effective rates than the headline figure suggests. There are no local/city income taxes in California, but all wages are also subject to a 1.2% State Disability Insurance withholding with no wage cap.",
  "highlights": [
    "Nine marginal brackets run from 1% to 12.3%, plus a 1% Mental Health Services Tax on taxable income over $1,000,000, giving a top effective rate of 13.3% — the highest of any state.",
    "California's 1.2% State Disability Insurance (SDI) tax applies to all wages with no wage-base cap as of 2024 (SB 951), raising the payroll burden on high earners.",
    "The 2025 standard deduction is $5,706 for single filers and $11,412 for married couples filing jointly, and married brackets are exactly double the single brackets."
  ]
};
