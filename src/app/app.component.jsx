// Modules
import React from "react";

// Hooks
import { useEffect } from "react";
import { useAuth, useUi, useDocument } from "../hooks";

// Components
import { Fragment } from "react";
import { ToastContainer, PageLoader } from "../components";

// App Routes
import { Routes } from "../routes.component";

const App = () => {
  const { dispatch, onInitializeAuth, checkedAuth, currentUser } = useAuth();
  const {
    isLoading: uiIsLoading,
    loadingType: uiLoadingType,
    startFetchingUiSettings,
  } = useUi();
  const {
    startFetchingDocuments,
    isLoading: documentIsLoading,
    loadingType: documentLoadingType,
  } = useDocument();
  const isFetchingUiSettings = uiIsLoading && uiLoadingType === "fetching";
  const isFetchingDocuments =
    documentIsLoading && documentLoadingType === "fetching";

  useEffect(() => {
    // Initialize Authentication
    dispatch(onInitializeAuth());
  }, []);

  useEffect(() => {
    // If User Exist
    if (currentUser) {
      // Fetch User Settings
      dispatch(startFetchingUiSettings());

      // Fetch User Documents
      dispatch(startFetchingDocuments());
    }
  }, [currentUser]);

  return (
    <Fragment>
      {/* Register Page Loader Spinner */}
      {(!checkedAuth || isFetchingUiSettings || isFetchingDocuments) && (
        <PageLoader />
      )}

      {/* Register App Routes */}
      {checkedAuth && !isFetchingUiSettings && !isFetchingDocuments && (
        <Routes />
      )}

      {/* Register Toast Container  */}
      <ToastContainer />
    </Fragment>
  );
};

export default App;
