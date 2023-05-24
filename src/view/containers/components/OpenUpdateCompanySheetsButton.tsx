import React from "react";
import { useSearchParams } from "react-router-dom";
import { EditFilled } from "@ant-design/icons";

import { ButtonComponent } from "../../components";
import * as Company from "../../../entities/Company";
import { useAppDispatch } from "../../../state/store";
import { CompanyActions } from "../../../state/slice/companySlice";

interface OpenCreateCompanySheetsButtonrops {
  company: Company.Company;
}

const OpenCreateCompanySheetsButton: React.FC<
  OpenCreateCompanySheetsButtonrops
> = ({ company }) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleOpenCreateCompanySheets = () => {
    dispatch(CompanyActions.editCompany(company));
    searchParams.set("useUpdateCompanySheets", "true");
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <ButtonComponent onClick={handleOpenCreateCompanySheets}>
      <EditFilled />
    </ButtonComponent>
  );
};

export default OpenCreateCompanySheetsButton;
