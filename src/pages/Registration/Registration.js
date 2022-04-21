import { Form } from "../../components/Form";
import { useDispatch } from "react-redux";
import { userRegister } from "../../store/actionCreators/user.actionCreator";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PHONE_REGEXP } from "../../constants/constants";

const fields = [
  {
    label: "Name",
    name: "firstName",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Surname",
    name: "lastName",
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

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  repeatPassword: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  lastName: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
  phone: Yup.string()
    .matches(PHONE_REGEXP, "Invalid phone")
    .min(10, "Too short...")
    .max(14, "Too long...")
    .required("A file is required"),
  password: Yup.string().min(2, "Too short...").required("Reguired!"),
  repeatPassword: Yup.string()
    .min(2, "Too short...")
    .required("Required!")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

export const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { firstName, lastName, phone, email, password } = values;
    try {
      console.log(values);
      dispatch(userRegister({ firstName, lastName, phone, email, password }));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      fields={fields}
      submit={handleSubmit}
      title={"Registration"}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  );
};
