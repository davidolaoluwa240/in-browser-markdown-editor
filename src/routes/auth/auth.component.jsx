// Modules
import React from "react";

// Hooks
import { useAuth } from "../../hooks";

// Hocs
import { preventIfAuth } from "../../hocs";

// Style
import {
  AuthenticationWrapper,
  AuthenticationContainer,
  AuthenticationButton,
  GithubIcon,
  GoogleIcon,
} from "./auth.styles";

const _Auth = () => {
  const { dispatch, startOAuth, isLoading, loadingType } = useAuth();
  const isGoogleProviderLoading = isLoading && loadingType === "google";
  const isGithubProviderLoading = isLoading && loadingType === "github";

  /**
   * Handle Login/Signup With OAuth
   * @param {string} provider Provider
   */
  const handleLoginWithOAuth = (provider) => {
    // Perform OAuth Authentication
    dispatch(startOAuth(provider));
  };

  return (
    <AuthenticationWrapper>
      <AuthenticationContainer>
        <AuthenticationButton
          disabled={isGoogleProviderLoading || isGithubProviderLoading}
          isLoading={isGoogleProviderLoading}
          tertiary
          onClick={handleLoginWithOAuth.bind(null, "google")}
        >
          <GoogleIcon />
          Continue with Google
        </AuthenticationButton>

        <AuthenticationButton
          disabled={isGoogleProviderLoading || isGithubProviderLoading}
          isLoading={isGithubProviderLoading}
          secondary
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
