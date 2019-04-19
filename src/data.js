import faker from "faker";

const N_COMPANIES = 30;
const N_CONTACTS = N_COMPANIES * 5;

export const initialCompanies = {
  byId: {},
  ids: []
};

for (let i = 0; i < N_COMPANIES; i++) {
  const company = {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    address: `${faker.address.streetAddress()}, ${faker.address.zipCode()} ${faker.address.city()}, ${faker.address.country()}`,
    email: Math.random() > 0.1 ? faker.internet.exampleEmail() : null,
    url: Math.random() > 0.3 ? faker.internet.url() : null,
    twitter: Math.random() > 0.6 ? faker.internet.userName() : null,
    facebook: Math.random() > 0.7 ? faker.internet.userName() : null,
    phone: faker.phone.phoneNumber(),
    bitcoin: faker.finance.bitcoinAddress(),
    iban: faker.finance.iban()
  };
  initialCompanies.byId[company.id] = company;
  initialCompanies.ids.push(company.id);
}

const pickCompanyId = () =>
  initialCompanies.ids[Math.trunc(Math.random() * N_COMPANIES)];
const pickSellers = (max = Math.random() * 5) => {
  const res = [];
  for (let i = 0; i < max; i++) {
    res.push(pickCompanyId());
  }
  return res;
};

export const initialContacts = [];

for (let i = 0; i < N_CONTACTS; i++) {
  const contact = {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    employer: pickCompanyId(),
    sellers: pickSellers()
  };
  initialContacts.push(contact);
}
