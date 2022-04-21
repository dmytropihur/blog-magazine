import axios from "axios";
import { URL } from "../../constants/constants";
import { useGetCookie } from "../../helpers/useGetCookie";
import {
  CREATING_POST_SUCCESS,
  CREATING_POST_STARTED,
  CREATING_POST_ERROR,
} from "../actionTypes";

export const createPost = (payload) => {
  return async (dispatch) => {
    dispatch(creatingStarted());
    const accessToken = useGetCookie("accessToken");
    console.log(accessToken);

    try {
      await axios({
        url: `${URL}/posts`,
        method: "post",
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(creatingSuccess());
    } catch (error) {
      dispatch(creatingError(error));
    }
  };
};

export const creatingStarted = () => ({
  type: CREATING_POST_STARTED,
});
export const creatingSuccess = () => ({
  type: CREATING_POST_SUCCESS,
});
export const creatingError = (payload) => ({
  type: CREATING_POST_ERROR,
  payload,
});
