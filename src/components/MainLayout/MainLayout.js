import React from "react";
import styled from "@emotion/styled";
import { NavBar } from "../NavBar";
import { Spinner } from "react-bootstrap";
import { useUserState } from "../../helpers/useUserState";

export const MainLayout = ({ children }) => {
  const { status } = useUserState();

  return (
    <>
      <NavBar />
      {status === "loading" ? (
        <Content>
          <Spinner animation="border" />
        </Content>
      ) : (
        <Content>{children}</Content>
      )}
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
