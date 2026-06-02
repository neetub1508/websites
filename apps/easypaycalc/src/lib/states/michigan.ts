import type { StateInfo } from './types';
import { CAP } from '../tax';

export const MICHIGAN: StateInfo = {
  "code": "MI",
  "name": "Michigan",
  "slug": "michigan",
  "hasIncomeTax": true,
  "taxSummary": "Flat 4.25%",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [
      {
        "rate": 0.0425,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.0425,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Michigan levies a flat 4.25% income tax on all wage income, keeping take-home pay calculations simple compared to states with progressive brackets. The state has no standard deduction, but it offers a personal exemption ($5,800 per person for 2025) that reduces taxable income. Workers in roughly two dozen Michigan cities, including Detroit, owe an additional local income tax that further reduces net pay.",
  "highlights": [
    "Flat 4.25% rate applies to all taxable income regardless of earnings or filing status",
    "No standard deduction, but a 2025 personal exemption of $5,800 per filer and dependent lowers taxable income",
    "About 24 Michigan cities impose a local income tax on top of the state rate"
  ],
  "localNote": "Around two dozen Michigan cities levy a local income tax under the Uniform City Income Tax Ordinance, with nonresident rates set at half the resident rate. Detroit charges the highest rate at 2.4% for residents and 1.2% for nonresidents. Grand Rapids and Saginaw charge 1.5% resident / 0.75% nonresident, and Highland Park charges 2% resident / 1% nonresident. Most other cities (such as Lansing and Flint) charge 1% resident / 0.5% nonresident. Residents pay on all compensation; nonresidents pay only on wages earned for work performed inside city limits."
};
