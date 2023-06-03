// Modules
import styled from "styled-components";

// Components
import { NavLink } from "react-router-dom";
import { IoDocumentOutline } from "react-icons/io5";

export const DocumentFileContent = styled.p`
  margin-left: 1.6rem;
  line-height: 18px;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  transition: color 0.3s ease-out;
`;

export const DocumentFileItemWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  &:hover {
    ${DocumentFileContent} {
      color: #e46643;
    }
  }

  &.active {
    ${DocumentFileContent} {
      color: #e46643;
    }
  }
`;

export const DocumentFileIcon = styled(IoDocumentOutline)`
  font-size: 2rem;
  vertical-align: middle;
`;

export const DocumentFileCreatedTime = styled.span`
  color: #ced4da;
  display: block;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 15px;
`;
