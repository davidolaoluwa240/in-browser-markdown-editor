// Modules
import React from "react";

/**
 * Enhance React Spinner Component
 * @param {Function} Component React Component
 */
export const withEnhancedSpinner = (Component) => {
  return ({ className, ...props }) => (
    <Component wrapperClass={className} {...props} />
  );
};
