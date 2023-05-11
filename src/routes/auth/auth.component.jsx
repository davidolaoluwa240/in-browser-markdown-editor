// Modules
import React from "react";

// Hooks
import { useAuth } from "../../hooks";

// Hocs
import { preventIfAuth } from "../../hocs/preventIfAuth.hocs";

// Style
import {
  AuthenticationWrapper,
  AuthenticationContainer,
  AuthenticationButton,
  GithubIcon,
  GoogleIcon,
} from "./auth.styles";

const _Auth = () => {
  const { dispatch, startOAuth } = useAuth();

  /**
   * Handle Login/Signup With OAuth
   * @param {string} provider Provider
   */
  const handleLoginWithOAuth = (provider) => {
    dispatch(startOAuth(provider));
  };

  return (
    <AuthenticationWrapper>
      <AuthenticationContainer>
        <AuthenticationButton
          onClick={handleLoginWithOAuth.bind(null, "google")}
        >
          <GoogleIcon />
          Continue with Google
        </AuthenticationButton>

        <AuthenticationButton
          onClick={handleLoginWithOAuth.bind(null, "github")}
        >
          <GithubIcon />
          Continue with Github
        </AuthenticationButton>
      </AuthenticationContainer>
    </AuthenticationWrapper>
  );
};

// Prevent Access If User Is Authenticated
export const Auth = preventIfAuth(_Auth);
