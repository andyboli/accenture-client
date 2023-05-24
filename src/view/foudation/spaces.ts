import GRID from "./grid";

export enum SPACE_TYPES {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  NONE = "NONE",
  RIGHT = "RIGHT",
  SMALL = "SMALL",
}

const SPACES: Record<SPACE_TYPES, string> = {
  [SPACE_TYPES.BIG]: `${GRID(1)} ${GRID(4)}`,
  [SPACE_TYPES.MEDIUM]: `${GRID(1)} ${GRID(2)}`,
  [SPACE_TYPES.NONE]: "0",
  [SPACE_TYPES.RIGHT]: GRID(4),
  [SPACE_TYPES.SMALL]: `${GRID(0.25)} ${GRID(0.5)}`,
};

export default SPACES;
