import styled from "@emotion/styled";

export const Item = styled.li`
  list-style: none;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 436px;
  height: 100%;
  padding: 25px 20px 30px;
  color: #666666;
`;
export const Img = styled.img`
  border: 1px solid #979797;
  width: 270px;
  height: 185px;
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
  max-width: 230px;
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
export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background: #171717;
  display: block;
`;
