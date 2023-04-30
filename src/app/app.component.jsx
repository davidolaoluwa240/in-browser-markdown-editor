// Modules
import React from "react";

// Components
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { RootLayout } from "../layouts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="/welcome" replace />} />
        <Route path="/:documentName" element={<div>Editor</div>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
