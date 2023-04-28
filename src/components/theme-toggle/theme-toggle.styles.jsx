// Modules
import styled, { css } from "styled-components";

// Components
import { BiMoon } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";

export const themeIconBaseStyles = css`
  transition: color 0.3s ease-out;
  font-size: 2rem;
  ${({ isActive }) =>
    isActive ? "color: #f8f9fa" : "color: rgb(90, 96, 105)"};
`;

export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeThumb = styled.span`
  width: 17px;
  height: 18px;
  border-radius: 9999px;
  background: #fff;
  display: inline-block;
  transform: translateX(5%);
  transition: transform 0.3s ease-out;
`;

export const ThemeTrack = styled.div`
  background: #6c75a4;
  border-color: 1px solid #6c75a4;
  border-radius: 32px;
  width: 55px;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  margin: 0 1rem;
  cursor: pointer;

  ${ThemeThumb} {
    ${({ isLight }) => isLight && "transform: translateX(182%)"}
  }
`;

export const ThemeDarkIcon = styled(BiMoon)`
  ${themeIconBaseStyles}
`;

export const ThemeLightIcon = styled(MdOutlineLightMode)`
  ${themeIconBaseStyles}
`;
