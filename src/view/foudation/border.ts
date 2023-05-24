import GRID from "./grid";

export enum BORDER_TYPES {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  NONE = "NONE",
}

const BORDERS: Record<BORDER_TYPES, string> = {
  [BORDER_TYPES.BIG]: `${GRID(0.3)} solid`,
  [BORDER_TYPES.MEDIUM]: `${GRID(0.1)} solid`,
  [BORDER_TYPES.NONE]: "none",
};

export default BORDERS;
