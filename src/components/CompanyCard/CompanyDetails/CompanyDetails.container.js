import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCompanyById } from "../../../companies";
import CompanyDetails from './CompanyDetails.component';

export default connect(createStructuredSelector({
  company: getCompanyById
}))(CompanyDetails);
