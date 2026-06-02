import type { StateInfo } from './types';
import { CAP } from '../tax';

export const PENNSYLVANIA: StateInfo = {
  "code": "PA",
  "name": "Pennsylvania",
  "slug": "pennsylvania",
  "hasIncomeTax": true,
  "taxSummary": "Flat 3.07%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0307,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0307,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Pennsylvania levies one of the lowest flat income tax rates in the nation, taxing all wage income at just 3.07% regardless of how much you earn. Because the state offers no standard deduction or personal exemption, the flat rate applies to nearly your full compensation, though retirement income like Social Security and pensions is exempt. Take-home pay is further reduced for most workers by local earned income taxes, which nearly every municipality and school district imposes on top of the state rate.",
  "highlights": [
    "Pennsylvania has a flat 3.07% personal income tax rate, unchanged since 2004",
    "The state provides no standard deduction or personal exemption, so the flat rate applies to wage income directly",
    "Nearly all Pennsylvania residents owe a local Earned Income Tax (EIT) on top of the state rate, and Philadelphia imposes a separate wage tax"
  ],
  "localNote": "Most Pennsylvania municipalities and school districts levy a local Earned Income Tax (EIT) under Act 32, commonly ranging from about 0.5% to over 3%; the higher of the resident or work-location rate applies. Philadelphia imposes a separate Wage Tax under the Sterling Act, roughly 3.75% for residents and 3.44% for non-residents working in the city in 2025."
};
