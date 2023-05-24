import GRID from "./grid";

export enum RADIUS_TYPES {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  PILL = "PILL",
  ROUND = "ROUND",
  SMALL = "SMALL",
}

const BIG = GRID(2);
const MEDIUM = GRID(1);
const PILL = "100%";
const ROUND = GRID(1000);
const SMALL = GRID(0.5);

const RADIUS: Record<RADIUS_TYPES, string> = {
  [RADIUS_TYPES.BIG]: BIG,
  [RADIUS_TYPES.MEDIUM]: MEDIUM,
  [RADIUS_TYPES.PILL]: PILL,
  [RADIUS_TYPES.ROUND]: ROUND,
  [RADIUS_TYPES.SMALL]: SMALL,
};

export default RADIUS;
