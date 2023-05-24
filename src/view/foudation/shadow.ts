import GRID from "./grid";
import { COLORS_TYPES } from "./color";

export enum SHADOW_ORIENTATIONS {
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  UP = "UP",
}

export enum SHADOW_TYPES {
  BIG = "BIG",
  COLOR = "COLOR",
  MEDIUM = "MEDIUM",
  NONE = "NONE",
}

function getPosition(orientation: SHADOW_ORIENTATIONS): [number, number] {
  switch (orientation) {
    case SHADOW_ORIENTATIONS.UP:
      return [0, -1];
    case SHADOW_ORIENTATIONS.DOWN:
      return [0, 1];
    case SHADOW_ORIENTATIONS.LEFT:
      return [-1, 0];
    case SHADOW_ORIENTATIONS.RIGHT:
      return [1, 0];
    default:
      return [0, 0];
  }
}

function getShadowPosition(
  orientation: SHADOW_ORIENTATIONS,
  positionMultiplier: 0.5 | 1
): string {
  const [y, x] = getPosition(orientation);
  return `${GRID(y * positionMultiplier)} ${GRID(x * positionMultiplier)}`;
}

const getBlackShadow = (alpha: 0.08 | 0.16) => `rgba(0, 0, 0, ${alpha})`;

function mapHexToRGB(hex: string): [number, number, number] {
  const numbers = hex[0] === "#" ? hex.slice(1) : hex;
  const bigint = parseInt(numbers, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;
  return [red, green, blue];
}

function getShadowColor(color: string, alpha: number) {
  return `rgba(${mapHexToRGB(color).join(", ")}, ${alpha})`;
}

const MEDIUM = (
  orientation: SHADOW_ORIENTATIONS = SHADOW_ORIENTATIONS.DOWN
): string =>
  `${getShadowPosition(orientation, 0.5)} ${GRID(1)} ${getBlackShadow(0.08)}`;

const LARGE = (
  orientation: SHADOW_ORIENTATIONS = SHADOW_ORIENTATIONS.DOWN
): string =>
  `${getShadowPosition(orientation, 1)} ${GRID(4)} ${getBlackShadow(0.16)}`;

const COLOR = (
  orientation: SHADOW_ORIENTATIONS = SHADOW_ORIENTATIONS.DOWN,
  color: COLORS_TYPES = COLORS_TYPES.BLACK
): string =>
  `${getShadowPosition(orientation, 0.5)} ${GRID(2)} ${getShadowColor(
    color,
    0.16
  )}`;

const NONE = () => "none";

const SHADOWS: Record<
  SHADOW_TYPES,
  (orientation?: SHADOW_ORIENTATIONS, color?: COLORS_TYPES) => string
> = {
  [SHADOW_TYPES.BIG]: LARGE,
  [SHADOW_TYPES.COLOR]: COLOR,
  [SHADOW_TYPES.MEDIUM]: MEDIUM,
  [SHADOW_TYPES.NONE]: NONE,
};

export default SHADOWS;
