// Modules
import React from "react";

// Style
import {
  ThemeToggleWrapper,
  ThemeDarkIcon,
  ThemeLightIcon,
  ThemeTrack,
  ThemeThumb,
} from "./theme-toggle.styles";

export const ThemeToggle = ({ theme, setTheme }) => {
  const isLightTheme = theme === "light";
  const isDarkTheme = theme === "dark";

  /**
   * Handle Toggle Theme
   */
  const onHandleToggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeToggleWrapper>
      <ThemeDarkIcon isActive={isDarkTheme} />
      <ThemeTrack isLight={isLightTheme} onClick={onHandleToggleTheme}>
        <ThemeThumb />
      </ThemeTrack>
      <ThemeLightIcon isActive={isLightTheme} />
    </ThemeToggleWrapper>
  );
};

ThemeToggle.defaultProps = {
  theme: "dark",
};
