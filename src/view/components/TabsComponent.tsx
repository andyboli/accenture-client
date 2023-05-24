import React, { useState } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { Radio, Tabs } from "antd";

import { SPACE_TYPES } from "../foudation";
import { FlexStart } from "../components";

enum TAB_POSITIONS {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

interface TabsComponentProps {
  items: any;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ items }) => {
  const [position, setPosition] = useState<TAB_POSITIONS>(TAB_POSITIONS.TOP);
  const handleChangeTabsPosition = (position: TAB_POSITIONS) =>
    setPosition(position);
  return (
    <StyledTabsWrapper
      desktopMargin={SPACE_TYPES.NONE}
      mobileMargin={SPACE_TYPES.NONE}
      desktopPadding={SPACE_TYPES.MEDIUM}
      width="100%"
    >
      <TabsPositionControls
        position={position}
        handleChangeTabsPosition={handleChangeTabsPosition}
      />
      <Tabs defaultActiveKey="1" tabPosition={position} items={items} />
    </StyledTabsWrapper>
  );
};

interface TabsPositionControlsProps {
  position: TAB_POSITIONS;
  handleChangeTabsPosition: (position: TAB_POSITIONS) => void;
}

const TabsPositionControls: React.FC<TabsPositionControlsProps> = ({
  position,
  handleChangeTabsPosition,
}) => {
  const intl = useIntl();
  return (
    <Radio.Group
      onChange={(e) => handleChangeTabsPosition(e.target.value)}
      value={position}
    >
      <Radio.Button value={TAB_POSITIONS.TOP}>
        {intl.formatMessage({
          id: "TabsComponent.Horizontal",
        })}
      </Radio.Button>
      <Radio.Button value={TAB_POSITIONS.LEFT}>
        {intl.formatMessage({
          id: "TabsComponent.Vertical",
        })}
      </Radio.Button>
    </Radio.Group>
  );
};

const StyledTabsWrapper = styled(FlexStart)`
  .ant-tabs {
    width: 100%;
    height: 100% !important;
  }
`;

export default TabsComponent;
