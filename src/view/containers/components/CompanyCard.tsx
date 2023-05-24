import React from "react";
import { useIntl } from "react-intl";

import { BORDER_TYPES, COLORS_TYPES, GAPS_TYPES } from "../../foudation";
import {
  CardComponent,
  FlexBetween,
  FlexCenter,
  FlexStart,
  Subtitle,
  TextComponent,
} from "../../components";
import { SupplierCard, OpenUpdateCompanySheetsButton } from "../components";
import * as Company from "../../../entities/Company";
import * as Supplier from "../../../entities/Supplier";

interface CompanyCardProps {
  company: Company.Company;
}

const CompanyCardComponent: React.FC<CompanyCardProps> = ({ company }) => {
  const { name, suppliers, ...rest } = company;
  return (
    <CardComponent
      key={`CompanyCardComponent-${company.cnpj}`}
      title={
        <FlexBetween
          color={COLORS_TYPES.WHITE}
          border={BORDER_TYPES.NONE}
          width="100%"
          maxWidth="100%"
        >
          <Subtitle truncate>{name}</Subtitle>
          <OpenUpdateCompanySheetsButton company={company} />
        </FlexBetween>
      }
    >
      <FlexStart
        color={COLORS_TYPES.WHITE}
        border={BORDER_TYPES.NONE}
        desktopGap={GAPS_TYPES.SMALL}
      >
        {Object.entries(rest).map(([key, value]) => (
          <CompanyAttributeComponent
            label={key}
            value={value}
            key={`CompanyAttributeComponent-${key}`}
          />
        ))}
      </FlexStart>
      {!!suppliers && <CompanySuppliers suppliers={suppliers} />}
    </CardComponent>
  );
};

const CompanyAttributeComponent: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => {
  return (
    <FlexStart color={COLORS_TYPES.WHITE}>
      <TextComponent>{label + ":"}</TextComponent>
      <TextComponent>{value}</TextComponent>
    </FlexStart>
  );
};

const CompanySuppliers: React.FC<{ suppliers: Supplier.Supplier[] }> = ({
  suppliers,
}) => {
  const intl = useIntl();
  return (
    <FlexCenter flexDirection="column">
      <Subtitle>
        {intl.formatMessage({
          id: "CompanyCardComponent.SupplierSubtitle",
        })}
      </Subtitle>
      <FlexStart
        color={COLORS_TYPES.WHITE}
        border={BORDER_TYPES.NONE}
        desktopGap={GAPS_TYPES.MEDIUM}
      >
        {suppliers.map((supplier) => (
          <SupplierCard supplier={supplier} />
        ))}
      </FlexStart>
    </FlexCenter>
  );
};

export default CompanyCardComponent;
