const GRID_UNIT = 8;

const GRID = (gridMultiplier: number): string =>
  `${gridMultiplier * GRID_UNIT || 0}px`;

export default GRID;
