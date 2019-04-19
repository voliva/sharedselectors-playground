import styled from "styled-components";

export const StyledCompanyCard = styled.div`
  background: rgba(85, 75, 60, 0.8);
  border-radius: 5px;
  color: white;
  padding: 0.5em 1em;
`;

export const StyledCompanyDetail = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.1em 0;

  font-weight: ${({ isTitle }) => (isTitle ? "bold" : "normal")};

  svg {
    margin-right: 0.5em;
  }
`;

export const StyledCompanyDetails = styled.div`
  border-bottom: 1px solid;

  ${StyledCompanyDetail} {
    margin-bottom: 0.2em;
  }
`;

const disabledStyles = `
  cursor: default;
  opacity: 0.5;
`;
export const StyledIconButton = styled.div`
  cursor: pointer;

  ${({ disabled }) => disabled && disabledStyles}
`;

export const StyledCompanyMessengers = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;

  ${StyledIconButton} {
    font-size: 1.5em;
    margin: 0.2em;
  }
`;

export const StyledCompanyContact = styled.div`
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

export const StyledCompanyContacts = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5em;
`;
