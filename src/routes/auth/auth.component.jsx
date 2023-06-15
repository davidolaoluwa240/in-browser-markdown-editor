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

export const Auth = preventIfAuth(() => {
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
          widthFull
          onClick={handleLoginWithOAuth.bind(null, "google")}
        >
          <GoogleIcon />
          Continue with Google
        </AuthenticationButton>

        <AuthenticationButton
          disabled={isGoogleProviderLoading || isGithubProviderLoading}
          isLoading={isGithubProviderLoading}
          secondary
          widthFull
          onClick={handleLoginWithOAuth.bind(null, "github")}
        >
          <GithubIcon />
          Continue with Github
        </AuthenticationButton>
      </AuthenticationContainer>
    </AuthenticationWrapper>
  );
});
