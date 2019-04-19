import { connect } from "react-redux";
import { getCompanyId, getCompanyById } from "../../companies";
import { getContacts } from "../../contacts";
import { createSelector } from "reselect";
import CompanyCard from "./CompanyCard.component";

const getCompanyEmployees = createSelector(
  getContacts,
  getCompanyId,
  (contacts, companyId) => contacts.filter(c => c.employer === companyId)
);

const getCompanyCustomers = createSelector(
  getContacts,
  getCompanyId,
  (contacts, companyId) => contacts.filter(c => c.sellers.includes(companyId))
);

const getCompanyDetailsById = createSelector(
  getCompanyById,
  getCompanyEmployees,
  getCompanyCustomers,
  (company, employees, customers) => ({
    ...company,
    employees,
    customers
  })
);

export default connect((state, props) => ({
  company: getCompanyDetailsById(state, props)
}))(CompanyCard);
