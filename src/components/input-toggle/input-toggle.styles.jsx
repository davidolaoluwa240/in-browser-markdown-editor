// Modules
import styled from "styled-components";

export const InputToggleTrack = styled.div`
  background: #6c75a4;
  border-color: 1px solid #6c75a4;
  border-radius: 32px;
  width: 55px;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  margin: 0 1rem;
  cursor: pointer;
`;

export const InputToggleThumb = styled.span`
  width: 17px;
  height: 18px;
  border-radius: 9999px;
  background: #fff;
  display: inline-block;
  transform: translateX(5%);
  transition: transform 0.3s ease-out;
`;

export const InputToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${InputToggleThumb} {
    ${({ value }) => value === "on" && "transform: translateX(182%)"}
  }
`;
