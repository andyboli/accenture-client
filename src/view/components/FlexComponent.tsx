import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

import {
  BORDER_TYPES,
  BORDERS,
  COLORS_TYPES,
  GAPS_TYPES,
  GAPS,
  SPACE_TYPES,
  SPACES,
  RADIUS_TYPES,
  RADIUS,
  SHADOW_TYPES,
  SHADOWS,
} from "../foudation";

export interface FlexComponentProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps {
  border?: BORDER_TYPES;
  borderColor?: COLORS_TYPES;
  color?: COLORS_TYPES;
  desktopGap?: GAPS_TYPES;
  desktopMargin?: SPACE_TYPES;
  desktopPadding?: SPACE_TYPES;
  mobileGap?: GAPS_TYPES;
  mobileMargin?: SPACE_TYPES;
  mobilePadding?: SPACE_TYPES;
  mobileContent?: string;
  radius?: RADIUS_TYPES;
  role?: string;
  shadow?: SHADOW_TYPES;
}

const FlexComponent = styled.div<FlexComponentProps>`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;

  gap: ${({ desktopGap }) => (!!desktopGap ? GAPS[desktopGap] : GAPS.SMALL)};
  margin: ${({ desktopMargin }) =>
    !!desktopMargin ? SPACES[desktopMargin] : SPACES.SMALL};
  padding: ${({ desktopPadding }) =>
    !!desktopPadding ? SPACES[desktopPadding] : SPACES.SMALL};
  background-color: ${({ color }) => color || COLORS_TYPES.WHITE};
  border-radius: ${({ radius }) => (!!radius ? RADIUS[radius] : RADIUS.SMALL)};
  border: ${({ border, borderColor }) =>
    !!border
      ? !!borderColor
        ? `${BORDERS[border]} ${borderColor}`
        : BORDERS[border]
      : BORDERS.NONE};
  box-shadow: ${({ shadow }) =>
    !!shadow ? SHADOWS[shadow]() : SHADOWS.NONE()};

  @media screen and (max-width: 480px) {
    justify-content: ${({ mobileContent }) => mobileContent || "center"};

    gap: ${({ mobileGap }) => (!!mobileGap ? GAPS[mobileGap] : GAPS.SMALL)};
    margin: ${({ mobileMargin }) =>
      !!mobileMargin ? SPACES[mobileMargin] : SPACES.SMALL};
    padding: ${({ mobilePadding }) =>
      !!mobilePadding ? SPACES[mobilePadding] : SPACES.SMALL};
  }
  ${flexbox} ${space} ${layout};
`;

export const FlexBetween = styled(FlexComponent).attrs({
  justifyContent: "space-between",
})<FlexComponentProps>``;

export const FlexStart = styled(FlexComponent).attrs({
  justifyContent: "flex-start",
})<FlexComponentProps>``;

export const FlexCenter = styled(FlexComponent).attrs({
  justifyContent: "center",
})<FlexComponentProps>``;

export default FlexComponent;
