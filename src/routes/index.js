import { Route, Routes } from "react-router-dom";
import App from "../App";
import { LogIn } from "../pages/LogIn";
import { Registration } from "../pages/Registration";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LogIn />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};
