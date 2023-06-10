// Modules
import styled, { keyframes } from "styled-components";

// Components
import { MdClose } from "react-icons/md";
import { ReactModalExhanced, Button } from "../";

// Animations
const animateModalIn = keyframes`
  from{
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledReactModalExhanced = styled(ReactModalExhanced)`
  background: hsla(213, 4%, 51%, 0.4);
  position: fixed;
  inset: 0px;
  animation: ${animateModalIn} 0.3s linear;
  z-index: 3;
  overflow: auto;

  .ReactModal__Content {
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    bottom: auto !important;
    max-width: 380px;
    margin-right: -50% !important;
    transform: translate(-50%, -50%) !important;
    background: #151619 !important;
    border: none !important;

    @media screen and (max-width: 600px) {
      max-width: 94%;
      width: 94%;
    }
  }
`;

export const ModalHeading = styled.h6`
  font-size: 2rem;
  line-height: 26px;
  font-weight: 700;
  font-family: Roboto Slab, serif;
  margin-bottom: 2rem;
  color: #f8f9fa;
`;

export const ModalDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 1.5rem;
  line-height: 24px;
  color: #ced4da;
  margin-bottom: 1rem;
`;

export const ModalButton = styled(Button)`
  font-weight: 500;
`;

export const ModalCloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 9999px;
  display: ${({ showCloseIcon }) => (showCloseIcon ? "flex" : "none")};
  background: linear-gradient(
    198deg,
    rgba(6, 123, 194, 1) 0%,
    rgba(228, 102, 67, 1) 83%
  );
`;

export const ModalCloseIcon = styled(MdClose)`
  font-size: 2.2rem;
  color: #f8f9fa;
  vertical-align: middle;
  font-weight: 700;
`;
