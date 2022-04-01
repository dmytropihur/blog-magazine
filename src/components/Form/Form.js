import styled from "@emotion/styled";
import { Card, Container } from "react-bootstrap";
import { Button } from "../Button";
import { Input } from "../Input";

export const Form = ({fields, handleSubmit, title}) => {
  return (
    <Box>
      <StyledCard>
        <Card.Body>
          <Title as="h3">
            {title}
          </Title>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => {
              return <Input props={field} />;
            })}
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </form>
        </Card.Body>
      </StyledCard>
    </Box>
  );
}

const StyledCard = styled(Card)`
  width: 100%;
`

const Box = styled(Container)`
  max-width: 700px;
`;

const Title = styled(Card.Title)`
  margin-bottom: 2rem;
  text-align: center;
`