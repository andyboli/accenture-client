import React, { useRef } from "react";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import { Form, FormInstance } from "antd";

import { COLORS_TYPES, TYPOGRAPHY } from "../../foudation";
import {
  FlexStart,
  FormComponent,
  SheetsComponent,
  Subtitle,
} from "../../components";
import {
  CompanyFormItems,
  CreateCompanyButton,
  FillCompanyFormItemsButton,
  ResetCompanyFormItemsButton,
} from "../components";

const CreateCompanySheets: React.FC = () => {
  const intl = useIntl();
  const formRef = useRef<FormInstance>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const useCreateCompanySheets = searchParams.get("useCreateCompanySheets");
  const [form] = Form.useForm();
  const handleCloseCreateCompanySheets = () => {
    searchParams.delete("useCreateCompanySheets");
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <SheetsComponent
      handleCloseSheets={handleCloseCreateCompanySheets}
      title={
        <Subtitle
          color={COLORS_TYPES.WHITE}
          transform={TYPOGRAPHY.TEXT_TRANSFORMS.CAPITALIZE}
        >
          {intl.formatMessage({
            id: "CreateCompanyContainer.CreateCompany",
          })}
        </Subtitle>
      }
      open={!!useCreateCompanySheets}
    >
      <FormComponent form={form} formRef={formRef}>
        <CompanyFormItems />
        <CreateCompanySheetsControls form={form} formRef={formRef} />
      </FormComponent>
    </SheetsComponent>
  );
};

const CreateCompanySheetsControls: React.FC<{
  form: FormInstance;
  formRef: React.RefObject<FormInstance<any>>;
}> = ({ form, formRef }) => (
  <FlexStart>
    <CreateCompanyButton form={form} />
    <FillCompanyFormItemsButton formRef={formRef} />
    <ResetCompanyFormItemsButton formRef={formRef} />
  </FlexStart>
);

export default CreateCompanySheets;
