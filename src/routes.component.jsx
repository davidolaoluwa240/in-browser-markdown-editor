// Modules
import React from "react";

// Components
import { Routes as Switch, Route, Navigate } from "react-router-dom";

// Routes
import { Auth } from "./routes";

// Layouts
import { RootLayout, EditorLayout } from "./layouts";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/welcome" replace />} />
        <Route path=":documentId" element={<EditorLayout />} />
      </Route>

      <Route path="/auth" element={<Auth />} />
    </Switch>
  );
};
