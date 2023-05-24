import React from "react";
import styled from "styled-components";
import { Card, CardProps } from "antd";

import {
  BORDERS,
  COLORS_TYPES,
  RADIUS_TYPES,
  RADIUS,
  SHADOW_ORIENTATIONS,
  SHADOW_TYPES,
  SHADOWS,
  SPACES,
} from "../foudation";

const getBoxShadow = (
  shadowType: SHADOW_TYPES,
  orientation: SHADOW_ORIENTATIONS,
  color: COLORS_TYPES
) => {
  switch (shadowType) {
    case SHADOW_TYPES.NONE:
      return "none";
    case SHADOW_TYPES.BIG:
      return SHADOWS.BIG(orientation);
    case SHADOW_TYPES.COLOR:
      return SHADOWS.COLOR(orientation, color);
    default:
      return SHADOWS.MEDIUM(orientation);
  }
};

export type CardComponentProps = {
  background?: string;
  borderColor?: COLORS_TYPES;
  borderRadius?: RADIUS_TYPES;
  margin?: string;
  padding?: string;
  shadowColor?: COLORS_TYPES;
  shadowPosition?: SHADOW_ORIENTATIONS;
  shadowType?: SHADOW_TYPES;
  width?: string;
} & CardProps;

const CardComponent: React.FunctionComponent<CardComponentProps> = styled(
  Card
)<CardComponentProps>`
  box-sizing: border-box;
  position: relative;
  border: ${BORDERS.MEDIUM} ${COLORS_TYPES.GRAY_2};
  color: ${COLORS_TYPES.INDIGO_DARK};

  .ant-card  {
    max-height: 400px;
  }

  display: flex;
  flex-flow: wrap;
  max-width: 400px;
  x;
  ${({
    background = COLORS_TYPES.WHITE,
    borderColor = COLORS_TYPES.GRAY_2,
    borderRadius = RADIUS_TYPES.MEDIUM,
    margin = SPACES.SMALL,
    padding = SPACES.SMALL,
    shadowColor = COLORS_TYPES.BLACK,
    shadowPosition = SHADOW_ORIENTATIONS.UP,
    shadowType = SHADOW_TYPES.MEDIUM,
    width,
  }) => ({
    backgroundColor: background,
    borderColor,
    borderRadius: RADIUS[borderRadius],
    boxShadow: getBoxShadow(shadowType, shadowPosition, shadowColor),
    margin,
    padding,
    width: width || "100%",
  })}
`;

export default CardComponent;
