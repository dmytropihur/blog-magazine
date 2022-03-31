import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Activation } from "../pages/Activation/Activation";
import { HomePage } from "../pages/HomePage";
import { LogIn } from "../pages/LogIn";
import { Registration } from "../pages/Registration";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="auth/activate/:code" element={<Activation />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};
