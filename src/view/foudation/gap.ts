import GRID from "./grid";

export enum GAPS_TYPES {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

const GAPS: Record<GAPS_TYPES, string> = {
  [GAPS_TYPES.BIG]: `${GRID(2)} ${GRID(4)}`,
  [GAPS_TYPES.MEDIUM]: `${GRID(1)} ${GRID(2)}`,
  [GAPS_TYPES.SMALL]: `${GRID(0.25)} ${GRID(0.5)}`,
};

export default GAPS;
