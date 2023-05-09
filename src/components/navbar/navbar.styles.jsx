// Modules
import styled, { css } from "styled-components";

// Components
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";
import { BiSave } from "react-icons/bi";
import { ButtonBase } from "../button/button.styles";

export const NavbarWrapper = styled.div`
  background: #343a40;
  height: 72px;
  display: flex;
  justify-content: space-between;
`;

export const NavbarBrand = styled.div`
  height: 100%;
  display: flex;
`;

export const NavbarMenu = styled.span`
  width: 72px;
  height: 100%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #495057;
`;

const NavbarMenuIconBase = css`
  font-size: 3.8rem;
  color: #ffffff;
  font-weight: 700;
  vertical-align: middle;
`;

export const NavbarMenuIcon = styled(IoMenuOutline)`
  ${NavbarMenuIconBase}
  ${({ isMenuOpen }) => !isMenuOpen && "display: none"}
`;

export const NavbarMenuCloseIcon = styled(IoMdClose)`
  ${NavbarMenuIconBase}
  ${({ isMenuOpen }) => isMenuOpen && "display: none"}
`;

export const NavbarBrandTitle = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  line-height: 72px;
  padding-left: 2.5rem;
  padding-right: 2.9rem;
  font-family: "Commissioner", sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    width: 1px;
    height: 40px;
    display: block;
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const NavbarAction = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2.4rem;

  ${ButtonBase} {
    &:hover {
      background: #e46643;
    }
  }
`;

export const NavbarDocumentDeleteIcon = styled(TbTrash)`
  font-size: 2.6rem;
  margin-right: 2.4rem;
  cursor: pointer;
  color: rgb(124, 129, 135);
  transition: color 0.3s ease-out;

  &:hover {
    color: #e46643;
  }
`;

export const SaveIcon = styled(BiSave)`
  margin-right: 0.8rem;
  font-size: 2.3rem;
  color: #ffffff;
  vertical-align: middle;
`;
