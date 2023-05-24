import { faker } from "@faker-js/faker";
import fakerBr from "faker-br";

import {
  AccentureServiceDeleteResponse,
  AccentureServiceGetResponse,
  AccentureServicePostResponse,
  AccentureServicePutResponse,
} from "./Api";
import { Contact, mockContact } from "./Contact";
import { Supplier, mockSupplier } from "./Supplier";

export interface Company extends Contact {
  cnpj: string;
  suppliers?: Supplier[];
}

export interface CompanyState {
  editCompany?: Company;
  // Application Erros
  error: string;
}

export interface ReadCompaniesResponse
  extends AccentureServiceGetResponse<Company[]> {}
export interface ReadCompaniesRequest {}

export interface CreateCompanyResponse extends AccentureServicePostResponse {}
export interface CreateCompanyRequest extends Company {}

export interface DeleteCompanyResponse extends AccentureServiceDeleteResponse {}
export interface DeleteCompanyRequest extends Pick<Company, "cnpj"> {}

export interface UpdateCompanyResponse extends AccentureServicePutResponse {}
export interface UpdateCompanyRequest extends Partial<Company> {}

export const mockCompany = (company?: Partial<Company>): Company => {
  return {
    ...mockContact({ name: faker.company.companyName() }),
    cnpj: (fakerBr as any).br.cnpj() as string,
    suppliers: Array.from(
      Array(faker.datatype.number({ min: 0, max: 5 })).keys()
    ).map((_) => mockSupplier()),
    ...company,
  };
};

export const mockCompanies = (max = 10) =>
  Array.from(Array(faker.datatype.number({ min: 1, max })).keys()).map((_) =>
    mockCompany()
  );

export const getCompaniesChunks = (companies: Company[], chunks = 2) => {
  const companiesChunks: Company[][] = [];
  for (let i = 0; i < companies.length; i += chunks) {
    const chunk = companies.slice(i, i + chunks);
    companiesChunks.push(chunk);
  }
  return companiesChunks;
};
