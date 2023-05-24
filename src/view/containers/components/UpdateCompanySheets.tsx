import React, { useRef } from "react";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import { Form, FormInstance } from "antd";

import { COLORS_TYPES, TYPOGRAPHY } from "../../foudation";
import {
  SheetsComponent,
  Subtitle,
  FormComponent,
  FlexStart,
} from "../../components";
import {
  CompanyFormItems,
  UpdateCompanyButton,
  DeleteCompanyButton,
} from "../components";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import {
  CompanyActions,
  selectCompany,
} from "../../../state/slice/companySlice";

const UpdateCompanySheets: React.FC = () => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  const formRef = useRef<FormInstance>(null);
  const { editCompany } = useAppSelector(selectCompany);
  const [searchParams, setSearchParams] = useSearchParams();
  const [form] = Form.useForm();
  const useUpdateCompanySheets = searchParams.get("useUpdateCompanySheets");
  const handleCloseUpdateCompanySheets = () => {
    dispatch(CompanyActions.editCompany());
    searchParams.delete("useUpdateCompanySheets");
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <SheetsComponent
      handleCloseSheets={handleCloseUpdateCompanySheets}
      title={
        <Subtitle
          color={COLORS_TYPES.WHITE}
          transform={TYPOGRAPHY.TEXT_TRANSFORMS.CAPITALIZE}
        >
          {intl.formatMessage({
            id: "UpdateCompanyContainer.UpdateCompany",
          })}
        </Subtitle>
      }
      open={!!useUpdateCompanySheets}
    >
      <FormComponent form={form} formRef={formRef}>
        <CompanyFormItems company={editCompany} />
        <UpdateCompanySheetsControls form={form} />
      </FormComponent>
    </SheetsComponent>
  );
};

const UpdateCompanySheetsControls: React.FC<{
  form: FormInstance;
}> = ({ form }) => {
  return (
    <FlexStart>
      <UpdateCompanyButton form={form} />
      <DeleteCompanyButton />
    </FlexStart>
  );
};

export default UpdateCompanySheets;
