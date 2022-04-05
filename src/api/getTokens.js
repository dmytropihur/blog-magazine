import axios from "axios";

export const getTokens = async (refreshToken) => {
  const response = await axios
    .post(`${process.env.REACT_APP_DATABASE_URL}/auth/refresh`, {
      refreshToken: refreshToken,
    })
    .then((response) => response.data);

  return response;
};
