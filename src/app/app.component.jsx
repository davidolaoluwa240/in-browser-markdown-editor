// Modules
import React from "react";

// Hooks
import { useEffect } from "react";
import { useAuth, useUi } from "../hooks";

// Components
import { Fragment } from "react";
import { ToastContainer, PageLoader } from "../components";

// App Routes
import { Routes } from "../routes.component";

const App = () => {
  const { dispatch, onInitializeAuth, checkedAuth, currentUser } = useAuth();
  const { isLoading, loadingType, startFetchingUiSettings } = useUi();
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

  return (
    <Fragment>
      {/* Register Page Loader Spinner */}
      {(!checkedAuth || isFetchingUiSettings) && <PageLoader />}

      {/* Register App Routes */}
      {checkedAuth && !isFetchingUiSettings && <Routes />}

      {/* Register Toast Container  */}
      <ToastContainer />
    </Fragment>
  );
};

export default App;
