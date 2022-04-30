import axios from "axios";
import { URL } from "../constants/constants";

export const getUserById = async (id) => {
  try {
    const res = await axios
      .get(`${URL}/users/${id}`)
      .then((response) => response.data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
