// Modules
import React from "react";

// Components
import { AnimateTailSpin } from "../";

// Style
import {
  EditorSpinnerWrapper,
  EditorSpinnerText,
} from "./editor-spinner.styles";

export const EditorSpinner = ({ isLoading }) => {
  return (
    <EditorSpinnerWrapper isVisible={isLoading}>
      <AnimateTailSpin
        height="70"
        width="70"
        color="#ffffff"
        ariaLabel="Documents Loading"
        radius="1"
        visible
      />
      <EditorSpinnerText>Preparing Documents 📚</EditorSpinnerText>
    </EditorSpinnerWrapper>
  );
};
