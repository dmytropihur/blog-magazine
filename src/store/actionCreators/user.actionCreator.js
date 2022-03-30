import axios from "axios";
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REGISTRATION_STARTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "../actionTypes";

export const userRegister = (payload) => {
  return async (dispatch) => {
    //  console.log(payload);
    dispatch(registrationStarted());

    try {
      await axios
        .post(
          `${process.env.REACT_APP_DATABASE_URL}/auth/registration`,
          payload
        )
        .then((response) => response.data);
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
      await axios
        .post(`${process.env.REACT_APP_DATABASE_URL}/auth/login`, payload)
        .then((response) => response.data);
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginError(err));
      console.error(err)
    }
  };
};

export const registrationStarted = () => {
  return {
    type: REGISTRATION_STARTED,
  };
};
export const registrationSuccess = () => {
  return {
    type: REGISTRATION_SUCCESS,
  };
};
export const registrationError = (payload) => {
  return {
    type: REGISTRATION_ERROR,
    payload,
  };
};
export const loginStarted = () => {
  return {
    type: LOGIN_STARTED,
  };
};
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
export const loginError = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload,
  };
};
