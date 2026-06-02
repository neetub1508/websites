// ============================================================================
// State registry — auto-generated from research-verified 2025 tax data.
// One file per state (./<slug>.ts). To add/edit a state, edit its file and
// (if new) add an import + STATES entry here.
// ============================================================================

import type { StateTaxConfig } from '../tax';
import type { StateInfo } from './types';

import { ALABAMA } from './alabama';
import { ALASKA } from './alaska';
import { ARIZONA } from './arizona';
import { ARKANSAS } from './arkansas';
import { CALIFORNIA } from './california';
import { COLORADO } from './colorado';
import { CONNECTICUT } from './connecticut';
import { DELAWARE } from './delaware';
import { WASHINGTON_DC } from './washington-dc';
import { FLORIDA } from './florida';
import { GEORGIA } from './georgia';
import { HAWAII } from './hawaii';
import { IDAHO } from './idaho';
import { ILLINOIS } from './illinois';
import { INDIANA } from './indiana';
import { IOWA } from './iowa';
import { KANSAS } from './kansas';
import { KENTUCKY } from './kentucky';
import { LOUISIANA } from './louisiana';
import { MAINE } from './maine';
import { MARYLAND } from './maryland';
import { MASSACHUSETTS } from './massachusetts';
import { MICHIGAN } from './michigan';
import { MINNESOTA } from './minnesota';
import { MISSISSIPPI } from './mississippi';
import { MISSOURI } from './missouri';
import { MONTANA } from './montana';
import { NEBRASKA } from './nebraska';
import { NEVADA } from './nevada';
import { NEW_HAMPSHIRE } from './new-hampshire';
import { NEW_JERSEY } from './new-jersey';
import { NEW_MEXICO } from './new-mexico';
import { NEW_YORK } from './new-york';
import { NORTH_CAROLINA } from './north-carolina';
import { NORTH_DAKOTA } from './north-dakota';
import { OHIO } from './ohio';
import { OKLAHOMA } from './oklahoma';
import { OREGON } from './oregon';
import { PENNSYLVANIA } from './pennsylvania';
import { RHODE_ISLAND } from './rhode-island';
import { SOUTH_CAROLINA } from './south-carolina';
import { SOUTH_DAKOTA } from './south-dakota';
import { TENNESSEE } from './tennessee';
import { TEXAS } from './texas';
import { UTAH } from './utah';
import { VERMONT } from './vermont';
import { VIRGINIA } from './virginia';
import { WASHINGTON } from './washington';
import { WEST_VIRGINIA } from './west-virginia';
import { WISCONSIN } from './wisconsin';
import { WYOMING } from './wyoming';

export type { StateInfo } from './types';

/** All 50 states + DC (alphabetical by name). */
export const STATES: StateInfo[] = [
  ALABAMA,
  ALASKA,
  ARIZONA,
  ARKANSAS,
  CALIFORNIA,
  COLORADO,
  CONNECTICUT,
  DELAWARE,
  WASHINGTON_DC,
  FLORIDA,
  GEORGIA,
  HAWAII,
  IDAHO,
  ILLINOIS,
  INDIANA,
  IOWA,
  KANSAS,
  KENTUCKY,
  LOUISIANA,
  MAINE,
  MARYLAND,
  MASSACHUSETTS,
  MICHIGAN,
  MINNESOTA,
  MISSISSIPPI,
  MISSOURI,
  MONTANA,
  NEBRASKA,
  NEVADA,
  NEW_HAMPSHIRE,
  NEW_JERSEY,
  NEW_MEXICO,
  NEW_YORK,
  NORTH_CAROLINA,
  NORTH_DAKOTA,
  OHIO,
  OKLAHOMA,
  OREGON,
  PENNSYLVANIA,
  RHODE_ISLAND,
  SOUTH_CAROLINA,
  SOUTH_DAKOTA,
  TENNESSEE,
  TEXAS,
  UTAH,
  VERMONT,
  VIRGINIA,
  WASHINGTON,
  WEST_VIRGINIA,
  WISCONSIN,
  WYOMING,
];

/** The most-used states (by population) — shown by default on the homepage and footer. */
export const POPULAR_SLUGS = ['california', 'texas', 'florida', 'new-york', 'pennsylvania', 'illinois'];
export const popularStates: StateInfo[] = POPULAR_SLUGS
  .map((slug) => STATES.find((s) => s.slug === slug))
  .filter((s): s is StateInfo => Boolean(s));

export function getState(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

/** Strip a StateInfo down to the engine config that's safe to send to the client. */
export function toConfig(s: StateInfo): StateTaxConfig {
  return {
    code: s.code,
    name: s.name,
    hasIncomeTax: s.hasIncomeTax,
    standardDeduction: s.standardDeduction,
    brackets: s.brackets,
    extra: s.extra,
  };
}
