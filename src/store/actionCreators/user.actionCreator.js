import axios from "axios";
import { getCurrentUser } from "../../api/getCurrentUser";
import { URL } from "../../constants/constants";
import { setAccessCookie } from "../../helpers/setAccessCookie";
import { setRefreshCookie } from "../../helpers/setRefreshCookie";
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ACTIVATION_STARTED,
  ACTIVATION_SUCCESS,
  ACTIVATION_ERROR,
  LOGOUT,
  REGISTRATION_STARTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  SET_USER_STATE,
} from "../actionTypes";

export const userRegister = (payload) => {
  return async (dispatch) => {
    dispatch(registrationStarted());

    try {
      await axios.post(`${URL}/auth/registration`, payload);
      dispatch(registrationSuccess());
    } catch (err) {
      dispatch(registrationError(err));
    }
  };
};

export const userLogin = (payload) => {
  return async (dispatch) => {
    dispatch(loginStarted());

    try {
      const { refreshToken, accessToken, r_exp, a_exp } = await axios
        .post(`${URL}/auth/login`, payload)
        .then((response) => response.data);

      setAccessCookie(accessToken, a_exp);
      setRefreshCookie(refreshToken, r_exp);

      const user = await getCurrentUser(accessToken);

      dispatch(setUserState(user));
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginError(err));
      console.error(err);
    }
  };
};

export const userActivation = (payload) => {
  return async (dispatch) => {
    dispatch(activationStarted());

    try {
      await axios.get(`${URL}/auth/activate/${payload}`);
      dispatch(activationSuccess());
    } catch (err) {
      dispatch(activationError(err));
      console.error(err);
    }
  };
};

export const registrationStarted = () => ({
  type: REGISTRATION_STARTED,
});

export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

export const registrationError = (payload) => ({
  type: REGISTRATION_ERROR,
  payload,
});

export const activationStarted = () => ({
  type: ACTIVATION_STARTED,
});

export const activationSuccess = () => ({
  type: ACTIVATION_SUCCESS,
});

export const activationError = (payload) => ({
  type: ACTIVATION_ERROR,
  payload,
});

export const loginStarted = () => ({
  type: LOGIN_STARTED,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const setUserState = (payload) => ({
  type: SET_USER_STATE,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
