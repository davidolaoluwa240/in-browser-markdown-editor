// Modules
import React from "react";

// Hooks
import { useEffect } from "react";
import { useAuth } from "../hooks";

// Components
import { Fragment } from "react";
import { ToastContainer } from "../components";

// App Routes
import { Routes } from "../routes.component";

const App = () => {
  const { dispatch, onInitializeAuth } = useAuth();

  useEffect(() => {
    // Initialize Authentication
    dispatch(onInitializeAuth());
  }, []);

  return (
    <Fragment>
      {/* Application Routes Configuration */}
      <Routes />

      {/* Register Toast Container */}
      <ToastContainer />
    </Fragment>
  );
};

export default App;
