// Modules
import React from "react";

// Hooks
import { useEffect } from "react";
import { useAuth } from "../hooks";

// Components
import { Fragment } from "react";
import { ToastContainer, PageLoader } from "../components";

// App Routes
import { Routes } from "../routes.component";

const App = () => {
  const { dispatch, onInitializeAuth, checkedAuth } = useAuth();

  useEffect(() => {
    // Initialize Authentication
    dispatch(onInitializeAuth());
  }, []);

  return (
    <Fragment>
      {/* Register Page Loader Spinner */}
      {!checkedAuth && <PageLoader />}

      {/* Register App Routes And Toast Container */}
      {checkedAuth && (
        <Fragment>
          <Routes />
          <ToastContainer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
