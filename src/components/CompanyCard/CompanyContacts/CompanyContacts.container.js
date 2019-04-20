import { connect } from 'react-redux';
import { createSelector } from "reselect";

import { getCompanyEmployees, getCompanyCustomers } from "../../../companies";
import CompanyContacts from './CompanyContacts.component';

const selectorCounts = createSelector(
  [getCompanyCustomers, getCompanyEmployees],
  (customers, employees) => ({
    nCustomers: customers.length,
    nEmployees: employees.length
  })
)

export default connect(selectorCounts)(CompanyContacts);
