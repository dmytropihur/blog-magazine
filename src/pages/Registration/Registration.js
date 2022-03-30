import { Card, Container, Form } from "react-bootstrap";
import styled from "@emotion/styled";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useDispatch } from "react-redux";
import { userRegister } from "../../store/actionCreators/user.actionCreator";
import { useNavigate } from "react-router-dom";

const forms = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Surname",
    name: "surname",
    type: "text",
    placeholder: "Enter your surname",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "Enter your phone",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    label: "Repeat Password",
    name: "repeatPassword",
    type: "password",
    placeholder: "Repeat your password",
  },
];
export const Registration = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    const {target } = e
    const formData = new FormData(target)
    const firstName = formData.get('name')
    const lastName = formData.get('surname')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      dispatch(userRegister({firstName, lastName, phone, email, password}))
      navigate('/login')
    } catch (err) {
      console.log(err);
    } finally{}

  }



  return (
    <Box>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title as="h2" className="mb-4" style={{ textAlign: "center" }}>
            Registration
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