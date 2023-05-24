import React from "react";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";

import { TYPOGRAPHY } from "../../foudation";
import { ButtonComponent, Subtitle } from "../../components";

const OpenCreateCompanySheetsButton: React.FC = () => {
  const intl = useIntl();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleOpenCreateCompanySheets = () => {
    searchParams.set("useCreateCompanySheets", "true");
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <ButtonComponent onClick={handleOpenCreateCompanySheets}>
      <Subtitle
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.SEMI_BOLD}
      >
        {intl.formatMessage({
          id: "CreateCompanyContainer.CreateCompany",
        })}
      </Subtitle>
    </ButtonComponent>
  );
};

export default OpenCreateCompanySheetsButton;
