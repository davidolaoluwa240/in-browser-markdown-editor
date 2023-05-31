// Modules
import React from "react";

// Components
import { ThreeDots } from "react-loader-spinner";

export const AnimateThreeDots = ({ className, ...props }) => {
  return <ThreeDots wrapperClass={className} {...props} />;
};
