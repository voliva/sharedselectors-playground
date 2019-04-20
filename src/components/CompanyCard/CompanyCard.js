import React from "react";
import styled from "styled-components";

import CompanyContacts from './CompanyContacts';
import CompanyDetails from './CompanyDetails';
import CompanyMessengers from './CompanyMessengers';

export const StyledCompanyCard = styled.div`
  background: rgba(85, 75, 60, 0.8);
  border-radius: 5px;
  color: white;
  padding: 0.5em 1em;
`;

export default ({companyId}) => (
  <StyledCompanyCard>
    <CompanyDetails companyId={companyId} />
    <CompanyMessengers companyId={companyId} />
    <CompanyContacts companyId={companyId} />
  </StyledCompanyCard>
);
