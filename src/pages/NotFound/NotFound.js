import styled from "@emotion/styled";

export const NotFound = () => {
  return (
    <Flex>
      <Code>404</Code>
      <Span>Not Found</Span>
      <Text>The resource could not be found on this server or probably you don't have permission to access.</Text>
    </Flex>
  );
};
const Code = styled.span`
  font-size: 140px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 30px;
`;
const Span = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Text = styled.p`
  text-align: center;
`

const Flex = styled.div`
  color: #212529;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
`;
