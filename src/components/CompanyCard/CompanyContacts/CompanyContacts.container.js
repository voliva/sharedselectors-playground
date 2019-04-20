import { connect } from 'react-redux';
import createCachedSelector from 're-reselect'; 

import { getCompanyId, getCompanyEmployees, getCompanyCustomers } from "../../../companies";
import CompanyContacts from './CompanyContacts.component';

const selectorCounts = createCachedSelector(
  [getCompanyCustomers, getCompanyEmployees],
  (customers, employees) => ({
    nCustomers: customers.length,
    nEmployees: employees.length
  })
)(getCompanyId);

export default connect(selectorCounts)(CompanyContacts);
