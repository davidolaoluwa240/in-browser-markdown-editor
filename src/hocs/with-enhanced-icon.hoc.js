// Modules
import React from "react";

/**
 * Enhance React Icon Component
 * @param {Function} Component React Component
 */
export const withEnhancedIcon = (Component) => {
  return ({ isActive, isFullScreen, ...props }) => <Component {...props} />;
};
