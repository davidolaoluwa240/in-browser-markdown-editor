// Modules
import React from "react";
import { createRoot } from "react-dom/client";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

// Components
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Analytics } from "@vercel/analytics/react";
import App from "./app/app.component";

// Firebase
import "./utils/firebase/firebase-config.util";

// Store
import store from "./store/store";
import { persistore } from "./store/store";

// Styles
import "./index.css";

// Global Config
marked.use(mangle(), gfmHeadingId({ prefix: "in-browser-editor-" }));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <BrowserRouter>
          <App />
          <Analytics />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
