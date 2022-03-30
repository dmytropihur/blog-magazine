import styled from "@emotion/styled";
import { Card, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { userLogin } from "../../store/actionCreators/user.actionCreator";

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
export const LogIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    const {target} = e
    const formData = new FormData(target)
    const email = formData.get('email')
    const password = formData.get('password')
    try {
      dispatch(userLogin({email, password}))

    } catch(err) {
      console.log(err);
    }


  }



  return (
    <Box>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title as="h2" className="mb-4" style={{ textAlign: "center" }}>
            Log In
          </Card.Title>
          <Form onSubmit={handleSubmit}>
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