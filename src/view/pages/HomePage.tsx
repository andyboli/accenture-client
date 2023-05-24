import React from "react";
import { useIntl } from "react-intl";

import {
  COLORS_TYPES,
  GAPS_TYPES,
  SPACE_TYPES,
  TYPOGRAPHY,
  RADIUS_TYPES,
} from "../foudation";
import { FlexCenter, FlexStart, MainTitle } from "../components";
import { CreateCompanyContainer, UpdateCompanyContainer } from "../containers";

interface HomeWrapperProps {
  children: React.ReactNode;
}

const HomePage: React.FC = () => {
  return (
    <HomeWrapper>
      <HomePageHeader />
      <CreateCompanyContainer />
      <UpdateCompanyContainer />
    </HomeWrapper>
  );
};

const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => (
  <FlexStart
    color={COLORS_TYPES.BLACK}
    desktopGap={GAPS_TYPES.BIG}
    desktopMargin={SPACE_TYPES.NONE}
    desktopPadding={SPACE_TYPES.BIG}
    flexDirection="column"
    mobileContent="flex-start"
    mobileMargin={SPACE_TYPES.NONE}
    mobilePadding={SPACE_TYPES.SMALL}
    width="100%"
  >
    {children}
  </FlexStart>
);

const HomePageHeader: React.FC = () => {
  const intl = useIntl();
  return (
    <FlexCenter
      color={COLORS_TYPES.PURPLE_MAIN}
      desktopMargin={SPACE_TYPES.NONE}
      mobileMargin={SPACE_TYPES.NONE}
      radius={RADIUS_TYPES.ROUND}
      width="100%"
    >
      <MainTitle
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.BOLD}
      >
        {intl.formatMessage({
          id: "HomePage.MainTitle",
        })}
      </MainTitle>
    </FlexCenter>
  );
};

export default HomePage;
