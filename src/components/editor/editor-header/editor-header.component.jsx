// Modules
import React from "react";

// Hooks
import { useCallback } from "react";
import { useDocument } from "../../../hooks";

// Components
import { NotSavedFlag } from "../../";

// Style
import {
  EditorHeaderGroup,
  EditorHeaderTitle,
  EditorHeaderTitleGroup,
  EditorHeaderFullScreenExitIcon,
  EditorHeaderFullScreenIcon,
} from "./editor-header.styles";

export const EditorHeader = ({ type, isFullScreen, onToggleFullScreen }) => {
  const { document } = useDocument();
  const typeFirstChar = type[0];
  const isNotSaved =
    typeFirstChar === "m" && document?.notSavedFlag?.includes("content");

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
      <EditorHeaderTitleGroup>
        <EditorHeaderTitle>{type}</EditorHeaderTitle>
        <NotSavedFlag isVisible={isNotSaved} />
      </EditorHeaderTitleGroup>
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
