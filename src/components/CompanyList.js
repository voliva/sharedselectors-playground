import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getAllCompanyIds } from "../companies";
import CompanyCard from "./CompanyCard";

const renderCompany = id => <CompanyCard key={id} companyId={id} />;
const CompanyList = ({ companyIds }) => (
  <div className="CompanyList">{companyIds.map(renderCompany)}</div>
);

export default connect(createStructuredSelector({
  companyIds: getAllCompanyIds
}))(CompanyList);
