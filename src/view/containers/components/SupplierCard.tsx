import React from "react";
import { useIntl } from "react-intl";
import { Badge, Card } from "antd";

import { BORDER_TYPES, COLORS_TYPES } from "../../foudation";
import { FlexStart, TextComponent } from "../../components";
import * as Supplier from "../../../entities/Supplier";

interface SupplierCardProps {
  supplier: Supplier.Supplier;
}

const SupplierCard: React.FC<SupplierCardProps> = ({
  supplier: { type, name, ...rest },
}) => {
  const intl = useIntl();
  const mapSupplierBadgeLabel: Record<Supplier.SUPPLIER_TYPES, string> = {
    [Supplier.SUPPLIER_TYPES.COMPANY]: intl.formatMessage({
      id: "SupplierCard.Badge.CompanyLabel",
    }),
    [Supplier.SUPPLIER_TYPES.PERSON]: intl.formatMessage({
      id: "SupplierCard.Badge.PersonLabel",
    }),
  };
  return (
    <Badge.Ribbon
      text={<TextComponent>{mapSupplierBadgeLabel[type]}</TextComponent>}
      color={Supplier.mapSupplierBadgeColor[type]}
      key={`SupplierCard-${rest.id}}`}
    >
      <Card
        title={
          <FlexStart color={COLORS_TYPES.WHITE} border={BORDER_TYPES.NONE}>
            <TextComponent truncate>{name}</TextComponent>
          </FlexStart>
        }
        size="small"
      >
        {Object.entries(rest).map(([key, value]) => (
          <SupplierAttributeComponent
            label={key}
            value={value}
            key={`SupplierAttributeComponent-${key}}`}
          />
        ))}
      </Card>
    </Badge.Ribbon>
  );
};

const SupplierAttributeComponent: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => (
  <FlexStart color={COLORS_TYPES.WHITE} border={BORDER_TYPES.NONE}>
    <TextComponent>{label + ":"}</TextComponent>
    <TextComponent>{value}</TextComponent>
  </FlexStart>
);

export default SupplierCard;
