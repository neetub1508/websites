import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MINNESOTA: StateInfo = {
  "code": "MN",
  "name": "Minnesota",
  "slug": "minnesota",
  "hasIncomeTax": true,
  "taxSummary": "5.35% – 9.85%",
  "standardDeduction": {
    "single": 14950,
    "married": 29900
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0535,
        "upTo": 32570
      },
      {
        "rate": 0.068,
        "upTo": 106990
      },
      {
        "rate": 0.0785,
        "upTo": 198630
      },
      {
        "rate": 0.0985,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0535,
        "upTo": 47620
      },
      {
        "rate": 0.068,
        "upTo": 189180
      },
      {
        "rate": 0.0785,
        "upTo": 330410
      },
      {
        "rate": 0.0985,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Minnesota imposes one of the higher state income tax burdens in the country, with a steeply progressive structure topping out at 9.85% on the highest earners. There are no city or county income taxes, so your take-home pay is determined solely by the state's four brackets plus federal withholding. Compared with neighboring states, Minnesota's top rate is among the steepest in the Midwest, which meaningfully reduces take-home pay for high earners.",
  "highlights": [
    "Four progressive brackets ranging from 5.35% to 9.85% for the 2025 tax year",
    "2025 standard deduction is $14,950 for single filers and $29,900 for married filing jointly",
    "No local (city or county) income taxes anywhere in the state"
  ]
};
