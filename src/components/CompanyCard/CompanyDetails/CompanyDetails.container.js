import { connect } from 'react-redux';
import { createStructuredSelector } from 'redux-views';
import { getCompanyById } from "../../../companies";
import CompanyDetails from './CompanyDetails.component';

export default connect(createStructuredSelector({
  company: getCompanyById
}))(CompanyDetails);
