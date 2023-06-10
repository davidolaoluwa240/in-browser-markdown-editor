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
import {
  ModalCloseIcon,
  ModalCloseIconContainer,
} from "../../components/modal/modal.styles";

// Animations
const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;

export const DocumentSideBarMobileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: hsla(213, 4%, 51%, 0.4);
  display: none;
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

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: transform 0.3s ease-in;
  }
`;

export const RootLayoutWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in;
  transform: ${({ showSideBar }) =>
    showSideBar ? "translateX(0%)" : "translateX(-250px)"};

  @media screen and (max-width: 900px) {
    transform: none;

    ${DocumentSideBar} {
      transform: ${({ showSideBar }) =>
        showSideBar ? "translateX(0%)" : "translateX(-100%)"};
    }

    ${DocumentSideBarMobileOverlay} {
      display: ${({ showSideBar }) => (showSideBar ? "block" : "none")};
    }
  }
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
  ModalCloseIconContainer as DocumentSideBarCloseIconContainer,
  ModalCloseIcon as DocumentSideBarCloseIcon,
};
