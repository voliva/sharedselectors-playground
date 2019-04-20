import React from "react";
import styled from "styled-components";

import {
  FaBuilding,
  FaQuoteRight,
  FaMap,
} from "react-icons/fa";

const StyledCompanyDetail = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.1em 0;

  font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};

  svg {
    margin-right: 0.5em;
  }
`;

const StyledCompanyDetails = styled.div`
  border-bottom: 1px solid;

  ${StyledCompanyDetail} {
    margin-bottom: 0.2em;
  }
`;

const CompanyDetail = ({ Icon, text, isTitle }) => (
  <StyledCompanyDetail isTitle={isTitle}>
    <Icon /> {text}
  </StyledCompanyDetail>
);

const CompanyDetails = ({ company }) => (
  <StyledCompanyDetails>
    <CompanyDetail Icon={FaBuilding} text={company.name} isTitle />
    <CompanyDetail Icon={FaQuoteRight} text={company.description} />
    <CompanyDetail Icon={FaMap} text={company.address} />
  </StyledCompanyDetails>
);

export default CompanyDetails;
