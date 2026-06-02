import type { StateInfo } from './types';
import { CAP } from '../tax';

export const IOWA: StateInfo = {
  "code": "IA",
  "name": "Iowa",
  "slug": "iowa",
  "hasIncomeTax": true,
  "taxSummary": "Flat 3.8%",
  "standardDeduction": {
    "single": 15750,
    "married": 31500
  },
  "brackets": {
    "single": [
      {
        "rate": 0.038,
        "upTo": CAP
      }
    ],
    "married": [
      {
        "rate": 0.038,
        "upTo": CAP
      }
    ]
  },
  "extra": [],
  "intro": "Iowa moved to a single flat individual income tax rate of 3.8% beginning in tax year 2025, replacing its former graduated brackets that topped out at 5.7%. Because the rate is flat and Iowa now follows the generous federal standard deduction, take-home pay is more predictable across income levels than in most progressive-rate states. Many residents also pay a local school district surtax assessed as a percentage of their Iowa income tax, which can modestly reduce take-home pay depending on where they live.",
  "highlights": [
    "Iowa applies a single flat 3.8% income tax rate to all taxable income for 2025, regardless of filing status.",
    "Iowa couples to the federal standard deduction: $15,750 for single filers and $31,500 for married filing jointly in 2025.",
    "Most Iowa school districts levy a surtax (0% to 20% of state income tax owed), and six counties add a 1% EMS surtax."
  ],
  "localNote": "Many Iowa school districts impose a local income surtax calculated as a percentage (ranging from 0% up to about 20%) of the resident's Iowa state income tax liability, based on the district of residence on the last day of the tax year. Additionally, residents of Appanoose, Cass, Pocahontas, Sac, Shelby, and Winnebago counties pay a 1% Emergency Medical Services (EMS) income surtax. These are levied on top of state income tax and vary by location."
};
