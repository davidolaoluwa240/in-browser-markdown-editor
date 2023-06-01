// Modules
import styled from "styled-components";

// Components
import { ReactModalExhanced, Button } from "../";

export const StyledReactModalExhanced = styled(ReactModalExhanced)`
  background: hsla(213, 4%, 51%, 0.4);
  position: fixed;
  inset: 0px;

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
  font-weight: 600;
`;
