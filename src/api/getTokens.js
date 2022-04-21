import axios from "axios";
import { URL } from "../constants/constants";

export const getTokens = async (refreshToken) => {
  try {
    const response = await axios
      .post(`${URL}/auth/refresh`, {
        refreshToken: refreshToken,
      })
      .then((response) => response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
