import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MAINE: StateInfo = {
  "code": "ME",
  "name": "Maine",
  "slug": "maine",
  "hasIncomeTax": true,
  "taxSummary": "5.8% – 7.15%",
  "standardDeduction": {
    "single": 15000,
    "married": 30000
  },
  "brackets": {
    "single": [
      {
        "rate": 0.058,
        "upTo": 26800
      },
      {
        "rate": 0.0675,
        "upTo": 63450
      },
      {
        "rate": 0.0715,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.058,
        "upTo": 53600
      },
      {
        "rate": 0.0675,
        "upTo": 126900
      },
      {
        "rate": 0.0715,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Maine taxes wage income on a three-bracket graduated scale running from 5.8% to a top rate of 7.15%, placing it among the higher-taxing states in the country. There are no city or county income taxes anywhere in Maine, so the state rate is the only income tax that reduces your take-home pay. Because the top bracket kicks in at a relatively modest income level, many middle-income earners feel Maine's higher marginal rates compared with neighboring New Hampshire, which has no wage tax at all.",
  "highlights": [
    "Three graduated brackets of 5.8%, 6.75%, and 7.15%, with the top rate starting at $63,450 for single filers and $126,900 for joint filers in 2025.",
    "Standard deduction is $15,000 for single filers and $30,000 for married couples filing jointly, plus a $5,150 personal exemption per taxpayer.",
    "No local or municipal income taxes exist in Maine, and there is no state-mandated SDI or paid-family-leave payroll withholding for 2025."
  ]
};
