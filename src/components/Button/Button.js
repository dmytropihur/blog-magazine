import styled from "@emotion/styled";

export const Button = ({ children, type, handleSubmit }) => {
  return (
    <CustomButton type={type} onClick={handleSubmit}>{children}</CustomButton>
  )
};

const CustomButton = styled.button`
  padding: 7px 17px;
  border: transparent;
  background-color: #212529;
  color: #c4c4c4;
  border-radius: 4px;
  display: block;
  margin: 30px auto 0;
  &:hover {
    color: #fff;
  }
`;
