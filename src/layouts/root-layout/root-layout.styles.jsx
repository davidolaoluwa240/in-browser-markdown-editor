// Modules
import styled from "styled-components";

export const RootLayoutWrapper = styled.div`
  display: flex;
`;

export const DocumentSideBar = styled.aside`
  width: 250px;
  height: 100vh;
  padding: 2.7rem 2.4rem;
  background: #212529;
  display: flex;
  flex-direction: column;
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
`;

export const MainContent = styled.div`
  flex: 1;
`;
