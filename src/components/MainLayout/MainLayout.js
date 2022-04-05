import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { NavBar } from "../NavBar";

export const MainLayout = ({ children }) => {
  const { loading, error } = useSelector((state) => state.userReducer);

  return (
    <>
      {loading ? (
        <div>waiting...</div>
      ) : (
        <>
          <NavBar />
          <Content>{children}</Content>
        </>
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
