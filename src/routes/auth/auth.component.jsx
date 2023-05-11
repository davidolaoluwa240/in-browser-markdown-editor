// Modules
import React from "react";

// Hooks
import { useState, useEffect } from "react";
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
  const [loadingProviderName, setLoadingProviderName] = useState();
  const [googleIsLoading, setGoogleIsLoading] = useState(false);
  const [githubIsLoading, setGithubIsLoading] = useState(false);
  const { dispatch, startOAuth, isLoading } = useAuth();

  useEffect(() => {
    loadingProviderName === "google" && setGoogleIsLoading(isLoading);
    loadingProviderName === "github" && setGithubIsLoading(isLoading);
  }, [isLoading]);

  /**
   * Handle Login/Signup With OAuth
   * @param {string} provider Provider
   */
  const handleLoginWithOAuth = async (provider) => {
    // Update Loading Provider Name
    setLoadingProviderName(provider);

    // Perform OAuth Authentication
    await dispatch(startOAuth(provider));
  };

  return (
    <AuthenticationWrapper>
      <AuthenticationContainer>
        <AuthenticationButton
          disabled={googleIsLoading || githubIsLoading}
          isLoading={googleIsLoading}
          onClick={handleLoginWithOAuth.bind(null, "google")}
        >
          <GoogleIcon />
          Continue with Google
        </AuthenticationButton>

        <AuthenticationButton
          disabled={googleIsLoading || githubIsLoading}
          isLoading={githubIsLoading}
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
