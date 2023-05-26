// Modules
import styled, { css } from "styled-components";

// Components
import { BiMoon } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";

export const themeIconBaseStyles = css`
  transition: color 0.3s ease-out;
  font-size: 2rem;
  color: rgb(90, 96, 105);
  ${({ isActive }) => isActive && "color: #f8f9fa"}
`;

export const ThemeDarkIcon = styled(BiMoon)`
  ${themeIconBaseStyles}
`;

export const ThemeLightIcon = styled(MdOutlineLightMode)`
  ${themeIconBaseStyles}
`;
