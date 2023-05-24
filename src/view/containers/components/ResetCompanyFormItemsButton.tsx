import React from "react";
import { useIntl } from "react-intl";
import { FormInstance } from "antd";

import { TYPOGRAPHY } from "../../foudation";
import { ButtonComponent, BUTTON_TYPES } from "../../components";
import { TextComponent } from "../../components";

const ResetCompanyFormItemsButton: React.FC<{
  formRef: React.RefObject<FormInstance<any>>;
}> = ({ formRef }) => {
  const intl = useIntl();
  const handleReset = () => {
    formRef.current?.resetFields();
  };
  return (
    <ButtonComponent onClick={handleReset} buttontype={BUTTON_TYPES.SECONDARY}>
      <TextComponent
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.SEMI_BOLD}
      >
        {intl.formatMessage({
          id: "CreateCompanyContainer.RestCompany",
        })}
      </TextComponent>
    </ButtonComponent>
  );
};

export default ResetCompanyFormItemsButton;
