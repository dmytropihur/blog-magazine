import { useDispatch } from "react-redux";
import { Form } from "../../components/Form";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/actionCreators/user.actionCreator";

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

export const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async ({preventDefault, target}) => {
    preventDefault();
    const formData = new FormData(target)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      dispatch(userLogin({email, password}))
      navigate('/')
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Form fields={fields} handleSubmit={handleSubmit} title={'Log In'}/>
  );
};