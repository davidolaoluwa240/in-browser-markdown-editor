// Modules
import styled, { css } from "styled-components";

// Components
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../../components";

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #151619;
`;

export const AuthenticationContainer = styled.div`
  min-width: 350px;
`;

export const AuthenticationButton = styled(Button)`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const IconBaseStyle = css`
  margin-right: 0.6rem;
  vertical-align: middle;
  font-size: 1.8rem;
`;

export const GithubIcon = styled(FaGithub)`
  ${IconBaseStyle};
`;

export const GoogleIcon = styled(FaGoogle)`
  ${IconBaseStyle};
`;
