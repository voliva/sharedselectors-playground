import { connect } from 'react-redux';
import { createSelector } from "reselect";

import { makeGetCompanyEmployees, makeGetCompanyCustomers } from "../../../companies";
import CompanyContacts from './CompanyContacts.component';

export default connect(() => createSelector(
  [makeGetCompanyCustomers(), makeGetCompanyEmployees()],
  (customers, employees) => ({
    nCustomers: customers.length,
    nEmployees: employees.length
  })
))(CompanyContacts);
