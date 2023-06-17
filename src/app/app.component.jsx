// Modules
import React, { useCallback, useMemo } from "react";

// Hooks
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useUi, useDocument } from "../hooks";

// Components
import { ThemeProvider } from "styled-components";
import { ToastContainer, PageLoader } from "../components";

// Themes
import { LIGHT_THEME, DARK_THEME } from "../assets/themes";

// App Routes
import { Routes } from "../routes.component";

// Utils
import { History } from "../utils";

// Style
import { GlobalStyle } from "../index.styles";

const App = () => {
  const { dispatch, onInitializeAuth, checkedAuth, currentUser } = useAuth();
  const {
    isLoading,
    loadingType,
    startFetchingUiSettings,
    handleUpdateEditorFullScreen,
    isTabletDevice,
  } = useUi();
  const { startFetchingDocuments, documents } = useDocument();
  const [theme, setTheme] = useState(DARK_THEME);
  const location = useLocation();
  const navigate = useNavigate();
  const isFetchingUiSettings = isLoading && loadingType === "fetching";

  useEffect(() => {
    // Initialize Authentication
    dispatch(onInitializeAuth());
  }, []);

  useEffect(() => {
    // If User Exist
    if (currentUser) {
      // Fetch User Settings
      dispatch(startFetchingUiSettings());
    }
  }, [currentUser]);

  useEffect(() => {
    // If User Exist
    if (currentUser && !documents.length) {
      // Fetch User Documents
      dispatch(startFetchingDocuments());
    }
  }, [currentUser, documents]);

  useEffect(() => {
    // If On Tablet Or Mobile Phone And FetchingUiSettings Is False, Then Enable Markdown FullScreen By Default
    isTabletDevice &&
      !isFetchingUiSettings &&
      handleUpdateEditorFullScreen("markdown", "on");
  }, [isTabletDevice, isFetchingUiSettings]);

  useEffect(() => {
    // Update The History Object
    History.navigate = navigate;
    History.location = location;
  }, [location]);

  /**
   * Handle Update App Theme
   * @param {string} theme
   */
  const handleUpdateTheme = useCallback(
    (theme) => setTheme(theme === "dark" ? DARK_THEME : LIGHT_THEME),
    []
  );

  const themeProviderValue = useMemo(
    () => ({ ...theme, handleUpdateTheme }),
    [theme]
  );

  return (
    <ThemeProvider theme={themeProviderValue}>
      {/* Register Page Loader Spinner */}
      {(!checkedAuth || isFetchingUiSettings) && <PageLoader />}

      {/* Register App Routes */}
      {checkedAuth && !isFetchingUiSettings && <Routes />}

      {/* Register Toast Container  */}
      <ToastContainer />

      {/* Register Global Style */}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
