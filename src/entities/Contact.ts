import { faker } from "@faker-js/faker";

faker.locale = "pt_BR";

export interface Contact {
  cep: string;
  mail: string;
  name: string;
}

export const mockContact = (contact?: Partial<Contact>): Contact => ({
  cep: faker.address.zipCode("########"),
  mail: faker.internet.email(),
  name: faker.name.findName(),
  ...contact,
});
