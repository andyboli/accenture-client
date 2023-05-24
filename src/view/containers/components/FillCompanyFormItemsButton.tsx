import React from "react";
import { useIntl } from "react-intl";
import { FormInstance } from "antd";

import { TYPOGRAPHY } from "../../foudation";
import { ButtonComponent, TextComponent, BUTTON_TYPES } from "../../components";
import HomeController from "../../../controller/HomeController";

const FillCompanyFormItemsButton: React.FC<{
  formRef: React.RefObject<FormInstance<any>>;
}> = ({ formRef }) => {
  const intl = useIntl();
  const handleFillCompanyFormItems = async () => {
    const randomCompany =
      await HomeController.getRandomCompanyFromBeloHorizonte();
    formRef.current?.setFieldsValue(randomCompany);
  };
  return (
    <ButtonComponent
      onClick={handleFillCompanyFormItems}
      buttontype={BUTTON_TYPES.SECONDARY}
    >
      <TextComponent
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.SEMI_BOLD}
      >
        {intl.formatMessage({
          id: "CreateCompanyContainer.FillCompany",
        })}
      </TextComponent>
    </ButtonComponent>
  );
};

export default FillCompanyFormItemsButton;
