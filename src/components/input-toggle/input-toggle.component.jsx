// Modules
import React, { cloneElement } from "react";

// Style
import {
  InputToggleWrapper,
  InputToggleTrack,
  InputToggleThumb,
} from "./input-toggle.styles";

export const InputToggle = ({ value, onContent, offContent, onChange }) => {
  /**
   * Handle Input Toggle Value Change
   */
  const onHandleToggleInputChange = () =>
    onChange(value === "off" ? "on" : "off");

  return (
    <InputToggleWrapper value={value}>
      {cloneElement(offContent, { isActive: value === "off" })}
      <InputToggleTrack onClick={onHandleToggleInputChange}>
        <InputToggleThumb />
      </InputToggleTrack>
      {cloneElement(onContent, { isActive: value === "on" })}
    </InputToggleWrapper>
  );
};

InputToggle.defaultProps = {
  value: "off",
};
