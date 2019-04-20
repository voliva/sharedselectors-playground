import { createSelector, createKeySelector } from "redux-views";

import { initialCompanies } from "./data";
import { getContacts } from "./contacts";

export default (state = initialCompanies, action) => state;

const getCompanies = state => state.companies;
export const getCompanyId = createKeySelector(props => props.companyId);

export const getAllCompanyIds = createSelector(
  getCompanies,
  companies => companies.ids
);

const getCompaniesDict = createSelector(
  getCompanies,
  companies => companies.byId
);

const pickOfficePhone = phones => phones.find(phone => phone.charAt(0) === 1) || phones[0] || null;

export const getCompanyById = createSelector(
  [getCompaniesDict, getCompanyId],
  (companies, id) => ({
    ...companies[id],
    phone: pickOfficePhone(companies[id].phones)
  })
);

export const getCompanyEmployees = createSelector(
  [getContacts, getCompanyId],
  (contacts, companyId) => contacts.filter(c => c.employer === companyId)
);

export const getCompanyCustomers = createSelector(
  [getContacts, getCompanyId],
  (contacts, companyId) => contacts.filter(c => c.sellers.includes(companyId))
);
