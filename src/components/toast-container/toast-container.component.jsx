// Modules
import React from "react";

// Components
import { ToastContainer as ToastBox } from "react-toastify";

// Style
import "react-toastify/dist/ReactToastify.css";

export const ToastContainer = () => {
  return (
    <ToastBox position="bottom-right" pauseOnHover closeOnClick theme="dark" />
  );
};
