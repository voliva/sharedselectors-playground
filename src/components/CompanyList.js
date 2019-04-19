import React from "react";
import { connect } from "react-redux";
import { getAllCompanyIds } from "../companies";
import CompanyCard from "./CompanyCard";

const renderCompany = id => <CompanyCard key={id} companyId={id} />;
const CompanyList = ({ companyIds }) => (
  <div className="CompanyList">{companyIds.map(renderCompany)}</div>
);

export default connect(state => ({
  companyIds: getAllCompanyIds(state)
}))(CompanyList);
