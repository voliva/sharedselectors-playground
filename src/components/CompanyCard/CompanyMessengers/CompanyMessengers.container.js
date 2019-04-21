import { connect } from 'react-redux';
import { createStructuredSelector } from 'redux-views';
import { getCompanyById } from "../../../companies";
import CompanyMessengers from './CompanyMessengers.component';

export default connect(createStructuredSelector({
  company: getCompanyById
}))(CompanyMessengers);
