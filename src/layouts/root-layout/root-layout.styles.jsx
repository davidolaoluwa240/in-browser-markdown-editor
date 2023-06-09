// Modules
import styled, { keyframes } from "styled-components";

// Components
import { AiOutlineSetting } from "react-icons/ai";

// Styles
import { InputToggleWrapper } from "../../components/input-toggle/input-toggle.styles";
import {
  NavbarAuthLogoutIcon,
  DownloadIcon,
} from "../../components/navbar/navbar.styles";
import { ButtonBase } from "../../components/button/button.styles";

// Animations
const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;

export const RootLayoutWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in;
  transform: ${({ showSideBar }) =>
    showSideBar ? "translateX(0%)" : "translateX(-250px)"};
`;

export const DocumentSideBar = styled.aside`
  width: 250px;
  height: 100vh;
  padding: 2.7rem 2.4rem;
  background: #212529;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DocumentTitle = styled.h6`
  letter-spacing: 2px;
  font-weight: 500;
  line-height: 16px;
  font-size: 1.4rem;
  margin-bottom: 2.9rem;
  color: #adb5bd;
`;

export const DocumentFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ButtonBase},
  ${NavbarAuthLogoutIcon} {
    display: none;
  }

  @media screen and (max-width: 500px) {
    justify-content: flex-start;

    ${ButtonBase} {
      display: inline-block;
      margin-right: 1.3rem;
    }

    ${NavbarAuthLogoutIcon} {
      display: block;
      margin-left: auto;
    }

    ${InputToggleWrapper} {
      display: none;
    }
  }
`;

export const MainContent = styled.div`
  flex-shrink: 0;
`;

export const SettingsIcon = styled(AiOutlineSetting)`
  vertical-align: middle;
  cursor: pointer;
  color: #f8f9fa;
  font-size: 2.4rem;
  animation: ${rotation} 1.4s linear infinite;
`;

export {
  NavbarAuthLogoutIcon as AuthLogoutIcon,
  DownloadIcon as DocumentDownloadIcon,
};
