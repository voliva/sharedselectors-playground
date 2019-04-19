import { createSelector } from "reselect";
import { initialCompanies } from "./data";

export const companies = (state = initialCompanies, action) => state;

const getCompanyState = state => state.companies;
export const getCompanyId = (state, props) => props.companyId;

export const getAllCompanyIds = createSelector(
  getCompanyState,
  companies => companies.ids
);

export const getCompanyById = createSelector(
  getCompanyState,
  getCompanyId,
  (companies, id) => companies.byId[id]
);
