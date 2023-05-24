import styled from "styled-components";
import { space, color, SpaceProps, ColorProps } from "styled-system";

import { COLORS_TYPES, TYPOGRAPHY } from "../foudation";
import FlexComponent from "./FlexComponent";

export type TextComponentProps = {
  lineHeight?: TYPOGRAPHY.LINE_HEIGHTS;
  size?: TYPOGRAPHY.FONT_SIZES;
  truncate?: boolean;
  transform?: TYPOGRAPHY.TEXT_TRANSFORMS;
  weight?: TYPOGRAPHY.FONT_WEIGHTS;
  width?: string;
} & SpaceProps &
  ColorProps;

const TextComponent = styled.p<TextComponentProps>`
  font-family: Neue-Plak-Black;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  word-break: break-word;

  ${({
    color = COLORS_TYPES.BLACK,
    lineHeight = TYPOGRAPHY.LINE_HEIGHTS.MEDIUM,
    size = TYPOGRAPHY.FONT_SIZES.MEDIUM,
    weight = TYPOGRAPHY.FONT_WEIGHTS.MEDIUM,
    transform = TYPOGRAPHY.TEXT_TRANSFORMS.NONE,
    width,
  }) => ({
    color,
    fontSize: size,
    fontWeight: weight,
    lineHeight,
    width,
    textTransform: transform,
  })}

  ${space}
  ${color}

  ${({ truncate }) =>
    truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const MainTitle = styled(TextComponent).attrs({
  as: "h1",
  lineHeight: TYPOGRAPHY.LINE_HEIGHTS.H1,
  size: TYPOGRAPHY.FONT_SIZES.H1,
})`
  @media screen and (max-width: 480px) {
    font-size: ${TYPOGRAPHY.FONT_SIZES.MEDIUM};
  }
`;

export const Title = styled(TextComponent).attrs({
  as: "h2",
  lineHeight: TYPOGRAPHY.LINE_HEIGHTS.H2,
  size: TYPOGRAPHY.FONT_SIZES.H2,
})`
  @media screen and (max-width: 480px) {
    font-size: ${TYPOGRAPHY.FONT_SIZES.H3};
  }
`;

export const Subtitle = styled(TextComponent).attrs({
  as: "h3",
  lineHeight: TYPOGRAPHY.LINE_HEIGHTS.H3,
  size: TYPOGRAPHY.FONT_SIZES.H3,
})`
  @media screen and (max-width: 480px) {
    font-size: ${TYPOGRAPHY.FONT_SIZES.SMALL};
  }
`;

export default TextComponent;
