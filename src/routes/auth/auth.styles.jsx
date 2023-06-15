// Modules
import styled, { css } from "styled-components";

// Components
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../../components";

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #151619;
`;

export const AuthenticationButton = styled(Button)`
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const AuthenticationContainer = styled.div`
  min-width: 350px;

  ${AuthenticationButton} {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    min-width: 94%;
  }
`;

export const iconStyle = css`
  margin-right: 0.6rem;
  vertical-align: middle;
  font-size: 1.8rem;
`;

export const GithubIcon = styled(FaGithub)`
  ${iconStyle};
`;

export const GoogleIcon = styled(FaGoogle)`
  ${iconStyle};
`;
