import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./api/getCurrentUser";
import { getTokens } from "./api/getTokens";
import { MainLayout } from "./components/MainLayout";
import { deleteCookies } from "./helpers/deleteCookies";
import { getCookie } from "./helpers/getCookie";
import { Providers } from "./providers";
import { AppRoutes } from "./routes";
import { setUserState } from "./store/actionCreators/user.actionCreator";

function App() {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");

  useEffect(async () => {
    const setNewTokens = (data) => {
      const { refreshToken, accessToken, a_exp, r_exp } = data;
      deleteCookies();
      document.cookie = `accessToken=${accessToken}; expires=${a_exp}`;
      document.cookie = `refreshToken=${refreshToken}; expires=${r_exp}`;
      return accessToken;
    };

    if (accessToken) {
      console.log("you have access token");
      const user = await getCurrentUser(accessToken);
      dispatch(setUserState(user));
    } else if (refreshToken) {
      const data = await getTokens(refreshToken);
      const accessToken = setNewTokens(data);
      const user = await getCurrentUser(accessToken);
      console.log(user);
      dispatch(setUserState(user));
      console.log("you have refresh token");
    } else if (!refreshToken) {
      console.log("you're not authorized");
    }
  }, []);

  return (
    <Providers>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Providers>
  );
}

export default App;
