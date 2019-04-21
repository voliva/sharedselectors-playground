import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeGetCompanyById } from "../../../companies";
import CompanyDetails from './CompanyDetails.component';

export default connect(() => createStructuredSelector({
  company: makeGetCompanyById()
}))(CompanyDetails);
