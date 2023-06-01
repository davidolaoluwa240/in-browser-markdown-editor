// Modules
import React from "react";

// Components
import { TailSpin } from "react-loader-spinner";

export const AnimateTailSpin = ({ className, ...props }) => {
  return <TailSpin wrapperClass={className} {...props} />;
};
