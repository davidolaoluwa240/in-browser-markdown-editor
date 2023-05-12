// Modules
import React from "react";

// Components
import { Routes as Switch, Route } from "react-router-dom";

// Routes
import { Auth } from "./routes";

// Layouts
import { RootLayout, EditorLayout } from "./layouts";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<EditorLayout />} />
        <Route path=":documentId/:documentName" element={<EditorLayout />} />
      </Route>

      <Route path="/auth" element={<Auth />} />
    </Switch>
  );
};
