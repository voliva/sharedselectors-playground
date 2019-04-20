import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaPhone,
} from "react-icons/fa";

const disabledStyles = `
  cursor: default;
  opacity: 0.5;
`;

const StyledIconButton = styled.div`
  cursor: pointer;

  ${({ disabled }) => disabled && disabledStyles}
`;

const StyledCompanyMessengers = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;

  ${StyledIconButton} {
    font-size: 1.5em;
    margin: 0.2em;
  }
`;

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

export default CompanyMessengers;
