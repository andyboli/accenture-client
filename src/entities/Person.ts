import { faker } from "@faker-js/faker";
import fakerBr from "faker-br";

import { AccentureServiceGetResponse } from "./Api";
import { Contact, mockContact } from "./Contact";

export interface Person extends Contact {
  cpf: string;
  name: string;
}

export interface ReadPeopleResponse
  extends AccentureServiceGetResponse<Person[]> {}

export const mockPerson = (): Person => ({
  cpf: (fakerBr as any).br.cpf() as string,
  ...mockContact({ name: faker.name.findName() }),
});
