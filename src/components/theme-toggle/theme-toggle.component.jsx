// Modules
import React from "react";

// Components
import { InputToggle } from "../";

// Style
import { ThemeDarkIcon, ThemeLightIcon } from "./theme-toggle.styles";

export const ThemeToggle = ({ theme, setTheme }) => {
  const value = theme === "dark" ? "off" : "on";

  /**
   * Handle Update Theme
   * @param {string} value
   */
  const onHandleUpdateTheme = (value) =>
    setTheme(value === "off" ? "dark" : "light");

  return (
    <InputToggle
      onContent={<ThemeLightIcon />}
      offContent={<ThemeDarkIcon />}
      value={value}
      onChange={onHandleUpdateTheme}
    />
  );
};

ThemeToggle.defaultProps = {
  theme: "dark",
};
