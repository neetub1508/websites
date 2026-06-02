import type { StateTaxConfig } from '../tax';

export interface StateInfo extends StateTaxConfig {
  /** URL slug, e.g. "california" -> /california */
  slug: string;
  /** Short human summary of state income tax, e.g. "1% – 12.3%" or "No state income tax". */
  taxSummary: string;
  /** 2–3 sentences of UNIQUE prose about this state's paycheck situation. */
  intro: string;
  /** Unique bullet facts shown in the "what's withheld" section. */
  highlights: string[];
  /** Optional note about local/city taxes or other specifics. */
  localNote?: string;
}
