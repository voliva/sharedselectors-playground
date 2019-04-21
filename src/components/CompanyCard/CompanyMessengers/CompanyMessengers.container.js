import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeGetCompanyById } from "../../../companies";
import CompanyMessengers from './CompanyMessengers.component';

export default connect(() => createStructuredSelector({
  company: makeGetCompanyById()
}))(CompanyMessengers);
