import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Item = styled.li`
  list-style: none;
  ${(props) => {
    switch (props.$display) {
      case "grid":
        return css`
          ${Wrapper} {
            max-height: 436px;
            height: 100%;
            padding: 25px 20px 30px;
          }
          ${Img} {
            border: 1px solid #979797;
            width: 270px;
            height: 185px;
          }
        `;
      case "list":
        return css`
          display: flex;
          margin-bottom: 30px;
          border: 1px solid #979797;
          ${Wrapper} {
            padding: 80px 30px;
            max-width: 300px;
            width: 100%;
          }
          ${Img} {
            border: none;
            width: 870px;
            height: 550px;
          }
        `;
    }
  }}
`;

export const Wrapper = styled.div`
  color: #666666;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Img = styled.img`
  display: block;
  object-fit: cover;
`;
export const Info = styled.div``;
export const Title = styled.h3`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 30px;
`;
export const Description = styled.p`
  height: 140px;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, transparent, #fff 60%);
  }
`;
export const Author = styled.span`
  font-size: 12px;
  display: inline-block;
  margin-bottom: 30px;
`;
export const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #171717;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #171717;
    background-color: #fff;
    color: #171717;
  }
`;
export const DeleteButton = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid red;
  color: red;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;
export const EditButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #171717;
  color: #171717;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #171717;
    color: #fff;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
`;
