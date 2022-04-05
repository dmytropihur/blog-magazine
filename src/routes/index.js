import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Activation } from "../pages/Activation/Activation";
import { HomePage } from "../pages/HomePage";
import { LogIn } from "../pages/LogIn";
import { Registration } from "../pages/Registration";

export const AppRoutes = () => {
  const {user} = useSelector(state => state.userReducer)
  console.log(user);

  if (!!user) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/auth/activate/:code" element={<Activation />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};
