import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import styled from "@emotion/styled";
import { Input } from "../../components/Input";

export const Registration = () => {
  // const forms = ["Name", "Surname", "Email", "Phone", "Password"];
  const forms = [
    {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name'
  },
    {
    label: 'Surname',
    name: 'surname',
    type: 'text',
    placeholder: 'Enter your surname'
  },
    {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email'
  },
    {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: 'Enter your phone'
  },
    {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password'
  },
    {
    label: 'Repeat Password',
    name: 'repeatPassword',
    type: 'password',
    placeholder: 'Repeat your password'
  }
]

  return (
    <Box>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title as="h2" className="mb-4" style={{ textAlign: "center" }}>
            Registration
          </Card.Title>
          <Form>
            {forms.map((form) => {
              return (
                <Input props={form}/>
              );
            })}
            <SubmitButton variant='dark' type='submit'>Submit</SubmitButton>
          </Form>
        </Card.Body>
      </Card>
    </Box>
  );
};

const Box = styled(Container)`
  height: calc(100vh - 56px);
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  display: block;
  margin: 40px auto 0;
`
