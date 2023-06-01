// Modules
import React, { useCallback } from "react";

// Hooks
import { useEffect, useState } from "react";
import { useAuth, useUi } from "../hooks";

// Components
import { ThemeProvider } from "styled-components";
import { ToastContainer, PageLoader } from "../components";

// Themes
import { LIGHT_THEME, DARK_THEME } from "../assets/themes";

// App Routes
import { Routes } from "../routes.component";

const App = () => {
  const { dispatch, onInitializeAuth, checkedAuth, currentUser } = useAuth();
  const { isLoading, loadingType, startFetchingUiSettings } = useUi();
  const [theme, setTheme] = useState(DARK_THEME);
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

  /**
   * Handle Update App Theme
   * @param {string} theme
   */
  const handleUpdateTheme = useCallback(
    (theme) => setTheme(theme === "dark" ? DARK_THEME : LIGHT_THEME),
    []
  );

  return (
    <ThemeProvider theme={{ ...theme, handleUpdateTheme }}>
      {/* Register Page Loader Spinner */}
      {(!checkedAuth || isFetchingUiSettings) && <PageLoader />}

      {/* Register App Routes */}
      {checkedAuth && !isFetchingUiSettings && <Routes />}

      {/* Register Toast Container  */}
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
