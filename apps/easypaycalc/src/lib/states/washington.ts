import type { StateInfo } from './types';

export const WASHINGTON: StateInfo = {
  "code": "WA",
  "name": "Washington",
  "slug": "washington",
  "hasIncomeTax": false,
  "taxSummary": "No state income tax",
  "standardDeduction": {
    "single": 0,
    "married": 0
  },
  "brackets": {
    "single": [],
    "married": []
  },
  "extra": [],
  "intro": "Washington levies no personal income tax on wages, so workers keep all of their salary free from state withholding, boosting take-home pay relative to most other states. There are no city or county income taxes anywhere in the state. The trade-off is one of the nation's higher combined sales-tax rates and a state capital-gains excise tax on certain high-value investment profits, but neither touches ordinary wage income.",
  "highlights": [
    "Washington is one of nine states with no tax on wage income, meaning zero state income tax withheld from paychecks",
    "A separate 7% state excise tax applies only to long-term capital gains above an annually adjusted threshold, not to wages or salaries",
    "No Washington city or county imposes a local income tax, so there is no additional municipal wage withholding"
  ]
};
