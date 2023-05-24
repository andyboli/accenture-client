import React from "react";
import styled from "styled-components";
import { Drawer, DrawerProps } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import { BORDERS, COLORS_TYPES, SPACES, RADIUS, GAPS } from "../foudation";

type Props = {
  description?: string;
  isInsideDiv?: boolean;
  handleCloseSheets: () => void;
} & DrawerProps;

const SheetsComponent: React.FC<Props> = ({
  description,
  width = "fit-content",
  placement = "right",
  handleCloseSheets,
  children,
  ...props
}) => (
  <StyledSheets
    {...props}
    width={width}
    placement={placement}
    destroyOnClose
    closeIcon={<CloseCircleIcon onClick={handleCloseSheets} />}
  >
    {children}
  </StyledSheets>
);

const CloseCircleIcon = styled(CloseCircleFilled)`
  color: ${COLORS_TYPES.RED_MAIN};
  :hover {
    color: ${COLORS_TYPES.RED_DARK};
  }
`;

const StyledSheets = styled(Drawer)<{ isInsideDiv?: boolean }>`
  &.ant-drawer-content {
    width: 40vw;

    background-color: ${COLORS_TYPES.WHITE};
    border: ${BORDERS.BIG} ${COLORS_TYPES.BLACK};
    border-radius: ${RADIUS.BIG};

    @media screen and (max-width: 480px) {
      width: 100vw;
    }
    .ant-drawer-header {
      background-color: ${COLORS_TYPES.BLACK};
    }
    .ant-drawer-header-title {
      .ant-drawer-title {
        order: 1;
      }
      .ant-drawer-close {
        order: 2;
      }
    }
    .ant-drawer-body {
      align-content: flex-start;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      padding: ${SPACES.BIG};
      margin: ${SPACES.NONE};
      gap: ${GAPS.BIG};

      background-color: ${COLORS_TYPES.WHITE};

      @media screen and (max-width: 480px) {
        padding: ${SPACES.SMALL};
      }
    }
  }
`;

export default SheetsComponent;
