// Modules
import React from "react";

// Hooks
import { useEffect } from "react";
import { useAuth } from "../hooks";

// Components
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "../components";

// Routes
import { Auth } from "../routes";

// Layouts
import { RootLayout, EditorLayout } from "../layouts";

const App = () => {
  const { dispatch, onInitializeAuth } = useAuth();

  useEffect(() => {
    // Initialize Authentication
    dispatch(onInitializeAuth());
  }, []);

  return (
    <Fragment>
      {/* Application Routes Configuration */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to="/welcome" replace />} />
          <Route path=":documentId" element={<EditorLayout />} />
        </Route>

        <Route path="/auth" element={<Auth />} />
      </Routes>

      {/* Register Toast Container */}
      <ToastContainer />
    </Fragment>
  );
};

export default App;
