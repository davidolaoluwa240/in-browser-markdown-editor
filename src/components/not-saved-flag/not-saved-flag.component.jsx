// Modules
import React from "react";

// Style
import { NotSavedFlagBox } from "./not-saved-flag.styles";

export const NotSavedFlag = (props) => {
  return (
    <NotSavedFlagBox
      title="Changes not saved. (ctrl + s) to save changes"
      {...props}
    />
  );
};

NotSavedFlag.defaultProps = {
  isVisible: false,
};
