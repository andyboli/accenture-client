import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { FormInstance } from "antd";

import { TYPOGRAPHY } from "../../foudation";
import {
  ButtonComponent,
  MESSAGE_TYPES,
  MessageComponent,
  configMessageComponent,
} from "../../components";
import { TextComponent } from "../../components";

const UpdateCompanyButton: React.FC<{ form: FormInstance }> = ({ form }) => {
  const intl = useIntl();
  // To do: Accenture-service: patch /company
  const handleUpdateCompany = () =>
    MessageComponent.open(
      configMessageComponent({
        text: intl.formatMessage({
          id: "Message.ServerError",
        }),
        key: "UpdateCompanyButtonMessage",
        type: MESSAGE_TYPES.DANGER,
      })
    );

  return (
    <ButtonComponent
      disabled={!form.isFieldTouched}
      onClick={handleUpdateCompany}
    >
      <TextComponent
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.SEMI_BOLD}
      >
        {intl.formatMessage({
          id: "UpdateCompanyContainer.UpdateCompany",
        })}
      </TextComponent>
    </ButtonComponent>
  );
};

export default UpdateCompanyButton;
