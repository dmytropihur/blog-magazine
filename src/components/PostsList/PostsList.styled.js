import styled, { css } from "styled-components";
export const List = styled.ul`
  padding: 0;
  ${(props) => {
    switch (props.$display) {
      case "grid":
        return css`
          display: grid;
          grid-template-columns: repeat(3, 270px);
          grid-template-rows: repeat(4, 620px);
          grid-gap: 30px;
        `;
      case "list":
        return css`
          display: block;
        `;
    }
  }}
`;
