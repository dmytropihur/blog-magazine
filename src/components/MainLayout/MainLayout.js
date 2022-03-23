import styled from "@emotion/styled";
import { NavBar } from "../NavBar";

export const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Content>{children}</Content>
    </>
  );
};

const Content = styled.div`
  padding: 20px;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
