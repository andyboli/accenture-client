import React from "react";
import styled from "styled-components";
import { Button as AntButton, ButtonProps } from "antd";

import { COLORS_TYPES, GRID, BORDERS } from "../foudation";
import { LoadingComponent, LOADING_SIZES } from ".";

export enum BUTTON_TYPES {
  DANGER = "DANGER",
  DISABLED = "DISABLED",
  LINK = "LINK",
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

const mapbuttontypeStyle = {
  [BUTTON_TYPES.PRIMARY]: {
    color: COLORS_TYPES.BLACK,
    background: COLORS_TYPES.GREEN_MAIN,
    border: `${BORDERS.MEDIUM} ${COLORS_TYPES.GREEN_MAIN}`,
    hoverBorder: `${BORDERS.MEDIUM} ${COLORS_TYPES.GREEN_DARK}`,
    hoverBackground: COLORS_TYPES.GREEN_DARK,
    hoverColor: COLORS_TYPES.BLACK,
  },
  [BUTTON_TYPES.SECONDARY]: {
    color: COLORS_TYPES.BLACK,
    background: COLORS_TYPES.PURPLE_MAIN,
    border: `${BORDERS.MEDIUM} ${COLORS_TYPES.PURPLE_MAIN}`,
    hoverBorder: `${BORDERS.MEDIUM} ${COLORS_TYPES.PURPLE_DARK}`,
    hoverBackground: COLORS_TYPES.PURPLE_DARK,
    hoverColor: COLORS_TYPES.BLACK,
  },
  [BUTTON_TYPES.TERTIARY]: {
    color: COLORS_TYPES.BLACK,
    background: COLORS_TYPES.BLUE_MAIN,
    border: `${BORDERS.MEDIUM} ${COLORS_TYPES.BLUE_MAIN}`,
    hoverBorder: `${BORDERS.MEDIUM} ${COLORS_TYPES.BLUE_DARK}`,
    hoverBackground: COLORS_TYPES.BLUE_DARK,
    hoverColor: COLORS_TYPES.BLACK,
  },
  [BUTTON_TYPES.LINK]: {
    color: COLORS_TYPES.GREEN_MAIN,
    background: COLORS_TYPES.WHITE,
    border: COLORS_TYPES.WHITE,
    hoverBorder: COLORS_TYPES.GREEN_LIGHT,
    hoverBackground: COLORS_TYPES.GREEN_LIGHT,
    hoverColor: COLORS_TYPES.GREEN_MAIN,
  },
  [BUTTON_TYPES.DISABLED]: {
    color: COLORS_TYPES.GRAY_4,
    background: COLORS_TYPES.GRAY_2,
    border: COLORS_TYPES.GRAY_2,
    hoverBorder: COLORS_TYPES.GRAY_2,
    hoverBackground: COLORS_TYPES.GRAY_2,
    hoverColor: COLORS_TYPES.GRAY_4,
  },
  [BUTTON_TYPES.DANGER]: {
    color: COLORS_TYPES.BLACK,
    background: COLORS_TYPES.RED_MAIN,
    border: `${BORDERS.MEDIUM} ${COLORS_TYPES.RED_MAIN}`,
    hoverBorder: `${BORDERS.MEDIUM} ${COLORS_TYPES.RED_DARK}`,
    hoverBackground: COLORS_TYPES.RED_DARK,
    hoverColor: COLORS_TYPES.BLACK,
  },
};

type ButtonComponentProps = {
  buttontype?: BUTTON_TYPES;
  large?: boolean;
} & Omit<
  ButtonProps,
  | "type"
  | "onPointerEnterCapture"
  | "size"
  | "shape"
  | "danger"
  | "ghost"
  | "prefixCls"
>;

const getButtonStyle = ({
  disabled,
  buttontype = BUTTON_TYPES.PRIMARY,
  children,
  large,
  icon,
}: ButtonComponentProps) => {
  let padding;
  let width;
  if (!children) {
    padding = "0";
    width = large ? "40px" : "32px";
  } else {
    const biggerSpace = large ? GRID(3) : GRID(2);
    const smallerSpace = large ? GRID(2) : GRID(1);
    if (icon) {
      padding = `0 ${biggerSpace} 0 ${smallerSpace}`;
    } else {
      padding = `0 ${biggerSpace}`;
    }
    width = "max-content";
  }
  return {
    width,
    padding,
    style: mapbuttontypeStyle[disabled ? BUTTON_TYPES.DISABLED : buttontype],
  };
};

const LoadingIcon = () => (
  <span className="ant-btn-icon">
    <LoadingComponent size={LOADING_SIZES.SMALL} />
  </span>
);

const ButtonComponent: React.FunctionComponent<ButtonComponentProps> = styled(
  AntButton
)
  .withConfig({
    shouldForwardProp: (prop) => !["large"].includes(prop),
  })
  .attrs((props) => {
    const tmpProps = { ...props };
    if (tmpProps.loading) {
      tmpProps.loading = false;
      tmpProps.icon = <LoadingIcon />;
      tmpProps.className = "loading";
    }
    return tmpProps;
  })<ButtonComponentProps>`
  &.ant-btn,
  &:focus:not([disabled]) {
    box-sizing: border-box;
    outline: none;
    display: flex;
    transition: background-color 0.1s ease-in-out;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    ${({
      large,
      disabled,
      buttontype = BUTTON_TYPES.PRIMARY,
      children,
      icon,
    }) => {
      const { width, padding, style } = getButtonStyle({
        large,
        disabled,
        buttontype,
        children,
        icon,
      });

      return `
        padding: ${padding};
        height: ${large ? 40 : 32}px;
        border: ${style.border};
        background-color: ${style.background};
        width: ${width};
        color: ${style.color};
        &:not(&.loading) {
          svg {
            path {
                fill: ${style.color};
            }
          }
        }
        &.loading {
          svg {
            circle {
              fill: transparent !important;
              stroke: ${style.color}  !important;
            }
          }
          &:hover{
            svg {
              circle {
                fill: ${style.hoverBackground};
                stroke: ${style.hoverColor}  !important;
              }
            }
          }
        }
        &:focus-visible:not([disabled]),
        &:hover:not([disabled]),
        &:hover:not([disabled]):not(.loading) {
            border: ${style.hoverBorder};
            background-color: ${style.hoverBackground};

            span {
              color: ${style.hoverColor};
              stroke: ${style.hoverColor};
            }

            svg {
              path {
                fill: ${style.hoverColor} !important;
              }

              circle {
                stroke: ${style.hoverColor} !important;
              }
            }
        }
    `;
    }}

    &:hover:not([disabled]) {
      cursor: pointer;
    }

    .ant-btn-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:not(.ant-btn-icon) {
      svg ~ span {
        margin-left: ${GRID(1)};
      }
    }

    &[disabled] {
      cursor: not-allowed;
    }
  }

  &.loading {
    & > span:not(.ant-btn-icon) {
      visibility: hidden;
    }

    .ant-btn-icon {
      position: absolute;
      display: flex;
      align-items: center;
    }
  }

  &.ant-btn-block {
    width: 100%;
  }
`;

export default ButtonComponent;
