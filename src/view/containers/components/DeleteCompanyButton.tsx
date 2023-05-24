import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { FormInstance } from "antd";

import { TYPOGRAPHY } from "../../foudation";
import {
  BUTTON_TYPES,
  ButtonComponent,
  configMessageComponent,
  MESSAGE_TYPES,
  MessageComponent,
} from "../../components";
import { TextComponent } from "../../components";

const DeleteCompanyButton: React.FC = () => {
  const intl = useIntl();
  // To do: Accenture-service: delete /company
  const handleUpdateCompany = () =>
    MessageComponent.open(
      configMessageComponent({
        text: intl.formatMessage({
          id: "Message.ServerError",
        }),
        key: "DeleteCompanyButtonMessage",
        type: MESSAGE_TYPES.DANGER,
      })
    );

  return (
    <ButtonComponent
      onClick={handleUpdateCompany}
      buttontype={BUTTON_TYPES.DANGER}
    >
      <TextComponent
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.SEMI_BOLD}
      >
        {intl.formatMessage({
          id: "DeleteCompanyButton.DeleteCompany",
        })}
      </TextComponent>
    </ButtonComponent>
  );
};

export default DeleteCompanyButton;
