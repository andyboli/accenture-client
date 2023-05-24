import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

import { COLORS_TYPES } from "../foudation";

export enum LOADING_SIZES {
  HUGE = "HUGE",
  LARGE = "LARGE",
  NORMAL = "NORMAL",
  SMALL = "SMALL",
  TINY = "TINY",
}

export enum LOADING_COLORS {
  GRAY = "GRAY",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
}

interface LoadingProps {
  color?: LOADING_COLORS;
  size?: LOADING_SIZES;
  title?: string;
}

const mapLoadingSizeToProps: Record<string, Record<string, number>> = {
  [LOADING_SIZES.TINY]: {
    iconSize: 12,
  },
  [LOADING_SIZES.SMALL]: {
    iconSize: 16,
  },
  [LOADING_SIZES.NORMAL]: {
    iconSize: 24,
  },
  [LOADING_SIZES.LARGE]: {
    iconSize: 64,
  },
  [LOADING_SIZES.HUGE]: {
    iconSize: 80,
  },
};

const mapLoadingColorToProps: Record<string, Record<string, string>> = {
  [LOADING_COLORS.WHITE]: {
    color: COLORS_TYPES.WHITE,
  },
  [LOADING_COLORS.RED]: {
    color: COLORS_TYPES.RED_MAIN,
  },
  [LOADING_COLORS.GREEN]: {
    color: COLORS_TYPES.GREEN_MAIN,
  },
  [LOADING_COLORS.GRAY]: {
    color: COLORS_TYPES.GRAY_5,
  },
};

const LoadingAnimationIcon = styled(LoadingOutlined)`
  display: inline-block;
  animation: rotate 2s linear infinite;
  circle {
    animation: dash 1.5s ease-in-out infinite;
    &:not([fill="none"]) {
      stroke: ${(props) => props.color};
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;

const Loading: React.FC<LoadingProps> = ({
  color = LOADING_COLORS.WHITE,
  size = LOADING_SIZES.TINY,
  title = "ícone de loading",
}) => (
  <LoadingAnimationIcon
    color={mapLoadingColorToProps[color].color}
    role="img"
    size={mapLoadingSizeToProps[size].iconSize}
    title={title}
  />
);

export default Loading;
