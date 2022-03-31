import styled from "@emotion/styled";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { userActivation } from "../../store/actionCreators/user.actionCreator";

export const Activation = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(userActivation(code));
      setActive(true);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };

  return (
    <>
      {active ? (
        <Card>
          <Card.Body>Your account is active now</Card.Body>
          <GoLink to="/login">Go Home</GoLink>
        </Card>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Button type="submit">Activate</Button>
        </Form>
      )}
    </>
  );
};

const GoLink = styled(Link)`
display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 7px 17px;
  border: transparent;
  background-color: #212529;
  color: #c4c4c4;
  border-radius: 4px;
  &:hover{
    color: #fff;
  }
`;
