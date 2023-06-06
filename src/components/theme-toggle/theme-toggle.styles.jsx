// Modules
import styled, { css } from "styled-components";

// Components
import { BiMoon, MdOutlineLightMode } from "..";

export const themeIconStyle = css`
  transition: color 0.3s ease-out;
  font-size: 2rem;
  vertical-align: middle;
  color: ${({ isActive }) => (isActive ? "#f8f9fa" : "#5a6069")};
`;

export const ThemeDarkIcon = styled(BiMoon)`
  ${themeIconStyle}
`;

export const ThemeLightIcon = styled(MdOutlineLightMode)`
  ${themeIconStyle}
`;
