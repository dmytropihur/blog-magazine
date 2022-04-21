import axios from "axios";
import { URL } from "../constants/constants";

export const getCurrentUser = async (accessToken) => {
  try {
    const res = await axios
      .get(`${URL}/auth/current`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => response.data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
