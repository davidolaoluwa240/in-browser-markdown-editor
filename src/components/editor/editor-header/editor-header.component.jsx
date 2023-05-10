// Modules
import React from "react";

// Style
import {
  EditorHeaderGroup,
  EditorHeaderTitle,
  EditorHeaderFullScreenExitIcon,
  EditorHeaderFullScreenIcon,
} from "./editor-header.styles";

export const EditorHeader = ({ type, isFullScreen, onToggleFullScreen }) => {
  const typeFirstChar = type[0];

  return (
    <EditorHeaderGroup>
      <EditorHeaderTitle>{type}</EditorHeaderTitle>
      <EditorHeaderFullScreenIcon
        title={`Full screen (${typeFirstChar})`}
        isFullScreen={isFullScreen}
        onClick={onToggleFullScreen.bind(null, type)}
      />
      <EditorHeaderFullScreenExitIcon
        title={`Exit full screen (${typeFirstChar})`}
        isFullScreen={isFullScreen}
        onClick={onToggleFullScreen.bind(null, type)}
      />
    </EditorHeaderGroup>
  );
};
