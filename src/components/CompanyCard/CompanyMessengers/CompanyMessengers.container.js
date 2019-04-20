import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCompanyById } from "../../../companies";
import CompanyMessengers from './CompanyMessengers.component';

export default connect(createStructuredSelector({
  company: getCompanyById
}))(CompanyMessengers);
