// Modules
import React from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./app/app.component";

// Styles
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
