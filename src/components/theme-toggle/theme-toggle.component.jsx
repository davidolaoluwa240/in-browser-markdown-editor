// Modules
import React from "react";

// Components
import { InputToggle } from "../";

// Style
import { ThemeDarkIcon, ThemeLightIcon } from "./theme-toggle.styles";

export const ThemeToggle = ({ theme, setTheme }) => {
  const value = theme === "dark" ? "off" : "on";

  /**
   * Handle Toggle Theme
   * @param {string} value
   */
  const onHandleToggleTheme = (value) =>
    setTheme(value === "off" ? "dark" : "light");

  return (
    <InputToggle
      onContent={<ThemeLightIcon />}
      offContent={<ThemeDarkIcon />}
      value={value}
      onChange={onHandleToggleTheme}
    />
  );
};

ThemeToggle.defaultProps = {
  theme: "dark",
};
