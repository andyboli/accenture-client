import { faker } from "@faker-js/faker";
import fakerBr from "faker-br";

import { AccentureServiceGetResponse } from "./Api";

faker.locale = "pt_BR";

export enum SUPPLIER_TYPES {
  "COMPANY" = "COMPANY",
  "PERSON" = "PERSON",
}

export interface Supplier {
  code: string;
  name: string;
  id: string;
  type: SUPPLIER_TYPES;
}

export interface ReadSuppliersResponse
  extends AccentureServiceGetResponse<Supplier[]> {}

export const isPerson = (type: SUPPLIER_TYPES) =>
  type === SUPPLIER_TYPES.PERSON;

export const isCompany = (type: SUPPLIER_TYPES) =>
  type === SUPPLIER_TYPES.COMPANY;

export const mapSupplierBadgeColor: Record<SUPPLIER_TYPES, string> = {
  [SUPPLIER_TYPES.COMPANY]: "#a100ff",
  [SUPPLIER_TYPES.PERSON]: "#ff2100",
};

export const mockSupplier = (supplier?: Partial<Supplier>): Supplier => {
  const mapSupplierTypeMock: Record<
    SUPPLIER_TYPES,
    Pick<Supplier, "type" | "id" | "name">
  > = {
    [SUPPLIER_TYPES.COMPANY]: {
      name: faker.company.companyName(),
      id: (fakerBr as any).br.cnpj(),
      type: SUPPLIER_TYPES.COMPANY,
    },
    [SUPPLIER_TYPES.PERSON]: {
      name: faker.name.findName(),
      id: (fakerBr as any).br.cpf(),
      type: SUPPLIER_TYPES.PERSON,
    },
  };

  const randomSupplierMock = !supplier?.type
    ? faker.datatype.boolean()
      ? {
          name: faker.name.firstName(),
          id: (fakerBr as any).br.cpf() as string,
          type: SUPPLIER_TYPES.PERSON,
        }
      : {
          name: faker.company.companyName(),
          id: (fakerBr as any).br.cnpj() as string,
          type: SUPPLIER_TYPES.COMPANY,
        }
    : mapSupplierTypeMock[supplier.type];

  return {
    code: faker.random.numeric(5),
    ...randomSupplierMock,
    ...supplier,
  };
};

export const mockedSuppliers = Array.from(Array(20).keys()).map((_) =>
  mockSupplier()
);
