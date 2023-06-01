// Modules
import React from "react";

// Components
import ReactModal from "react-modal";

export const ReactModalExhanced = ({ className, ...props }) => {
  return <ReactModal overlayClassName={className} {...props} />;
};
