import type { StateInfo } from './types';
import { CAP } from '../tax';

export const OHIO: StateInfo = {
  "code": "OH",
  "name": "Ohio",
  "slug": "ohio",
  "hasIncomeTax": true,
  "taxSummary": "0% – 3.125%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0,
        "upTo": 26050
      },
      {
        "rate": 0.0275,
        "upTo": 100000
      },
      {
        "rate": 0.03125,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0,
        "upTo": 26050
      },
      {
        "rate": 0.0275,
        "upTo": 100000
      },
      {
        "rate": 0.03125,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Ohio levies a low, graduated state income tax for 2025, with the first $26,050 of nonbusiness income fully exempt and a top marginal rate of just 3.125% on income above $100,000. The state rate is among the lowest in the nation, but take-home pay is meaningfully reduced for most workers by Ohio's widespread municipal income taxes, which can add roughly 1% to 3% on top of the state levy. Compared with neighbors, Ohio's state burden is modest, yet its layering of city and school-district taxes makes effective withholding more complex than in most states.",
  "highlights": [
    "The first $26,050 of taxable nonbusiness income is taxed at 0%, so low earners owe no state income tax",
    "Ohio's top marginal rate dropped to 3.125% for 2025 (from 3.5%), and the brackets are identical for single and married-filing-jointly filers",
    "Ohio has no standard deduction; instead it offers personal and dependent exemptions of $1,900–$2,400 each depending on modified AGI"
  ],
  "localNote": "Hundreds of Ohio municipalities (cities and villages) levy local income taxes on wages, commonly ranging from about 1% to 3% (e.g., Columbus, Cleveland, and Cincinnati), and some school districts also impose a separate income tax. These local taxes are administered separately from the state and are not computed here."
};
