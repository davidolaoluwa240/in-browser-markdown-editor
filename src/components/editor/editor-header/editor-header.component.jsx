// Modules
import React from "react";

// Components
import { useCallback } from "react";

// Style
import {
  EditorHeaderGroup,
  EditorHeaderTitle,
  EditorHeaderFullScreenExitIcon,
  EditorHeaderFullScreenIcon,
} from "./editor-header.styles";

export const EditorHeader = ({ type, isFullScreen, onToggleFullScreen }) => {
  const typeFirstChar = type[0];

  /**
   * Handle Toggle Editor Full Screen
   * @param {Event} event
   */
  const handleToggleFullScreen = useCallback(
    (event) => {
      const { target } = event;
      const svgElm = target.closest("svg");

      if (svgElm) {
        const titleText = svgElm.querySelector("title").textContent;
        const editorType = titleText.match(/\((.*?)\)/)[1];
        const editorName = editorType === "m" ? "markdown" : "preview";
        onToggleFullScreen(editorName, isFullScreen ? "off" : "on");
      }
    },
    [isFullScreen]
  );

  return (
    <EditorHeaderGroup onClick={handleToggleFullScreen}>
      <EditorHeaderTitle>{type}</EditorHeaderTitle>
      <EditorHeaderFullScreenIcon
        title={`Full screen (${typeFirstChar})`}
        isFullScreen={isFullScreen}
      />
      <EditorHeaderFullScreenExitIcon
        title={`Exit full screen (${typeFirstChar})`}
        isFullScreen={isFullScreen}
      />
    </EditorHeaderGroup>
  );
};
