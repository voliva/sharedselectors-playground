import React from "react";
import {
  FaBuilding,
  FaQuoteRight,
  FaMap,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaPhone,
  FaUser,
  FaUserTie
} from "react-icons/fa";
import {
  StyledCompanyCard,
  StyledCompanyContact,
  StyledCompanyContacts,
  StyledCompanyDetails,
  StyledCompanyMessengers,
  StyledCompanyDetail,
  StyledIconButton
} from "./CompanyCard.styled";

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

const IconButton = ({ Icon, disabled }) => (
  <StyledIconButton disabled={disabled}>
    <Icon />
  </StyledIconButton>
);

const CompanyMessengers = ({ company }) => (
  <StyledCompanyMessengers>
    <IconButton Icon={FaEnvelope} disabled={!company.email} />
    <IconButton Icon={FaTwitter} disabled={!company.twitter} />
    <IconButton Icon={FaFacebook} disabled={!company.facebook} />
    <IconButton Icon={FaPhone} disabled={!company.phone} />
  </StyledCompanyMessengers>
);

const CompanyContact = ({ Icon, count }) => (
  <StyledCompanyContact>
    <Icon />
    <div className="count">{count}</div>
  </StyledCompanyContact>
);

const CompanyContacts = ({ company }) => (
  <StyledCompanyContacts>
    <CompanyContact Icon={FaUser} count={company.customers.length} />
    <CompanyContact Icon={FaUserTie} count={company.employees.length} />
  </StyledCompanyContacts>
);

export default ({ company }) => (
  <StyledCompanyCard>
    <CompanyDetails company={company} />
    <CompanyMessengers company={company} />
    <CompanyContacts company={company} />
  </StyledCompanyCard>
);
