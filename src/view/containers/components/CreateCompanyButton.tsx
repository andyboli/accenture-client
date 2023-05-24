import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { Form, FormInstance } from "antd";

import { TYPOGRAPHY } from "../../foudation";
import {
  ButtonComponent,
  configMessageComponent,
  MESSAGE_TYPES,
  MessageComponent,
  TextComponent,
} from "../../components";

const CreateCompanyButton: React.FC<{ form: FormInstance }> = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);
  const intl = useIntl();
  const handleCreateCompany = () =>
    MessageComponent.open(
      configMessageComponent({
        text: intl.formatMessage({
          id: "Message.ServerError",
        }),
        key: "UpdateCompanyButtonMessage",
        type: MESSAGE_TYPES.DANGER,
      })
    );
  useEffect(() => {
    form.validateFields().then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [form, values]);
  return (
    <ButtonComponent disabled={!submittable} onClick={handleCreateCompany}>
      <TextComponent
        transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}
        weight={TYPOGRAPHY.FONT_WEIGHTS.SEMI_BOLD}
      >
        {intl.formatMessage({
          id: "CreateCompanyContainer.CreateCompany",
        })}
      </TextComponent>
    </ButtonComponent>
  );
};

export default CreateCompanyButton;
