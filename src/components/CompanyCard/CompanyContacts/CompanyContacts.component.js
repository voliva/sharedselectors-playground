import React from "react";
import styled from "styled-components";
import { FaUser, FaUserTie } from "react-icons/fa";

const StyledCompanyContact = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
  cursor: pointer;

  svg {
    font-size: 1.5em;
  }

  .count {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(200, 20, 20, 0.4);
    padding: 3px;
    border-radius: 100px;
    min-width: 1em;
    transform: translateX(33%) translateY(-33%);
    text-align: center;
  }
`;

const StyledCompanyContacts = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5em;
`;

const CompanyContact = ({ Icon, count }) => (
  <StyledCompanyContact>
    <Icon />
    <div className="count">{count}</div>
  </StyledCompanyContact>
);

const CompanyContacts = ({ nCustomers, nEmployees }) => (
  <StyledCompanyContacts>
    <CompanyContact Icon={FaUser} count={nCustomers} />
    <CompanyContact Icon={FaUserTie} count={nEmployees} />
  </StyledCompanyContacts>
);

export default CompanyContacts;
