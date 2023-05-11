// Modules
import React from "react";

// Hooks
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

// Components
import { Navigate } from "react-router-dom";

/**
 * Prevent Access To A Component, If User Is Not Authenticated
 * @param {Function} Component React component
 */
export const preventIfNotAuth = (Component) => {
  return (props) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    // Navigate To Auth Page If User Is Not LoggedIn
    if (!currentUser)
      return <Navigate to="/auth" replace state={{ from: location }} />;

    // Navigate To Specified Component
    return <Component {...props} />;
  };
};
