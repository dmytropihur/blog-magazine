import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTokens } from "./api/getTokens";
import { MainLayout } from "./components/MainLayout";
import { deleteCookies } from "./helpers/deleteCookies";
import { setAccessCookie } from "./helpers/setAccessCookie";
import { setRefreshCookie } from "./helpers/setRefreshCookie";
import { useGetCookie } from "./helpers/useGetCookie";
import { Providers } from "./providers";
import { AppRoutes } from "./routes";
import { fetchUser } from "./store/userReducer";

function App() {
  const dispatch = useDispatch();
  const [accessToken, refreshToken] = useGetCookie([
    "accessToken",
    "refreshToken",
  ]);

  useEffect(() => {
    const setNewTokens = (data) => {
      console.log(data);
      const { refreshToken, accessToken, a_exp, r_exp } = data;
      deleteCookies();
      setAccessCookie(accessToken, a_exp);
      setRefreshCookie(refreshToken, r_exp);
      return accessToken;
    };

    if (accessToken) {
      console.log("you have access token");
      dispatch(fetchUser(accessToken));
    } else if (refreshToken) {
      getTokens(refreshToken)
        .then(setNewTokens)
        .then((token) => dispatch(fetchUser(token)));

      console.log("you have refresh token");
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
