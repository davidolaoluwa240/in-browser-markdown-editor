// Modules
import React from "react";

// Hooks
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

// Components
import { Navigate } from "react-router-dom";

/**
 * Prevent Access To Component, If User Is Authenticated
 * @param {Function} Component React component
 */
export const preventIfAuth = (Component) => {
  return (props) => {
    const { currentUser } = useAuth();
    const { state } = useLocation();

    // If CurrentUser Exist And User Does Not Have From Location History, Then Navigate To Root Route
    if (currentUser && !state.from) return <Navigate to="/" replace />;

    // If CurrentUser Exist And User Have From Location History, Then Navigate To The History
    if (currentUser && state.from)
      return <Navigate to={state.from.pathname} replace />;

    // Navigate To Specified Component
    return <Component {...props} />;
  };
};
