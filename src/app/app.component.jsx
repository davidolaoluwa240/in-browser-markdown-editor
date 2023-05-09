// Modules
import React from "react";

// Components
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { RootLayout, EditorLayout } from "../layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/welcome" replace />} />
        <Route path=":documentId" element={<EditorLayout />} />
      </Route>
    </Routes>
  );
};

export default App;
