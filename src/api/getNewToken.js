import axios from "axios";

export const getNewToken = async (refreshToken) => {
  try {
    const res = await axios
      .post(`${process.env.REACT_APP_DATABASE_URL}/auth/refresh`, {refreshToken: refreshToken})
      .then(response => response.data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
