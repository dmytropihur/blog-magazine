import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/actionCreators/user.actionCreator";
import { Form } from "../../components/Form/Form";
import * as Yup from "yup";

const fields = [
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

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required!"),
  password: Yup.string().required("Required!"),
});

export const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      console.log(values);
      dispatch(userLogin({ email, password }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      title="Log In"
      initialValues={initialValues}
      fields={fields}
      submit={handleSubmit}
      validationSchema={validationSchema}
    />
  );
};
