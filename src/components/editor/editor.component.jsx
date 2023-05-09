// Modules
import React from "react";

// Components
import { Fragment } from "react";
import { EditorHeader } from "../";

export const Editor = ({ type, isFullScreen, onToggleFullScreen }) => {
  return (
    <Fragment>
      <EditorHeader
        type={type}
        isFullScreen={isFullScreen}
        onToggleFullScreen={onToggleFullScreen}
      />
    </Fragment>
  );
};
