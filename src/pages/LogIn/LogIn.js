import styled from "@emotion/styled";
import { Card, Container, Form } from "react-bootstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const LogIn = () => {

  const forms = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <Box>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title as="h2" className="mb-4" style={{ textAlign: "center" }}>
            Log In
          </Card.Title>
          <Form>
            {forms.map((form) => {
              return <Input props={form} />;
            })}
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Box>
  );
};

const Box = styled(Container)`
  max-width: 700px;
`;