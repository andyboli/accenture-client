import React from "react";
import { Select, Tag } from "antd";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";

import * as Supplier from "../../../entities/Supplier";
import HomeController from "../../../controller/HomeController";

interface SuppliersSelectProps {
  suppliers?: Supplier.Supplier[];
}

export interface SelectOption {
  label: string;
  value: string;
}

const SuppliersSelect: React.FC<SuppliersSelectProps> = ({ suppliers }) => {
  // To Do: Accenture-service: getSuppliers
  const allSuppliers = [...(suppliers || []), ...Supplier.mockedSuppliers];
  const options: SelectOption[] = allSuppliers.map(({ name, code }) => ({
    value: code,
    label: name,
  }));
  const defaultValue: string[] | undefined = suppliers?.map(({ code }) => code);
  const tagRender = ({ label, value, closable, onClose }: CustomTagProps) => {
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    const supplier = allSuppliers.find(({ code }) => code === value);
    if (!supplier) return <React.Fragment />;
    return (
      <Tag
        closable={closable}
        color={Supplier.mapSupplierBadgeColor[supplier.type]}
        onClose={onClose}
        onMouseDown={onPreventMouseDown}
      >
        {label}
      </Tag>
    );
  };
  return (
    <Select
      defaultValue={defaultValue}
      filterOption={HomeController.filterSupplierOption(
        Supplier.mockedSuppliers
      )}
      mode="multiple"
      options={options}
      showArrow
      tagRender={tagRender}
    />
  );
};

export default SuppliersSelect;
