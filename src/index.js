// Modules
import React from "react";
import { createRoot } from "react-dom/client";

// Components
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app/app.component";

// Store
import store from "./store/store";

// Styles
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
