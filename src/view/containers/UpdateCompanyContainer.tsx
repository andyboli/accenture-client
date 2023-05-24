import React from "react";
import { useIntl } from "react-intl";

import { COLORS_TYPES, SPACE_TYPES } from "../foudation";
import {
  FlexStart,
  LoadingComponent,
  MESSAGE_TYPES,
  MessageComponent,
  TextComponent,
  configMessageComponent,
} from "../components";
import { CompanyTabs, UpdateCompanySheets } from "./components";
import { useGetCompaniesQuery } from "../../state/api/companyApi";

const UpdateCompanyContainer: React.FC = () => {
  const intl = useIntl();
  const { data: companies, isLoading, error } = useGetCompaniesQuery({});

  if (isLoading) return <LoadingComponent />;

  if (error)
    MessageComponent.open(
      configMessageComponent({
        text: error as string,
        key: "UpdateCompanyContainerMessage",
        type: MESSAGE_TYPES.DANGER,
      })
    );

  if (!companies)
    return (
      <FlexStart
        color={COLORS_TYPES.BLACK}
        desktopMargin={SPACE_TYPES.NONE}
        mobileMargin={SPACE_TYPES.NONE}
        width="100%"
      >
        <TextComponent>
          {intl.formatMessage({
            id: "UpdateCompanyContainer.EmptyCompanies",
          })}
        </TextComponent>
      </FlexStart>
    );

  return (
    <FlexStart
      color={COLORS_TYPES.BLACK}
      desktopMargin={SPACE_TYPES.NONE}
      mobileMargin={SPACE_TYPES.NONE}
      width="100%"
    >
      <CompanyTabs companies={companies} />
      <UpdateCompanySheets />
    </FlexStart>
  );
};

export default UpdateCompanyContainer;
