import axios from "axios";
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
} from "../actionTypes";

export const userRegister = (payload) => {
  return async (dispatch) => {
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
      const currentUser = await axios
        .post(`${process.env.REACT_APP_DATABASE_URL}/auth/login`, payload)
        .then((response) => response.data);
      dispatch(loginSuccess(currentUser));
      localStorage.setItem('accessToken', JSON.stringify(currentUser.accessToken))
      localStorage.setItem('refreshToken', JSON.stringify(currentUser.refreshToken))
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
      await axios
        .get(`${process.env.REACT_APP_DATABASE_URL}/auth/activate/${payload}`)
        .then((response) => console.log(response.data));
      dispatch(activationSuccess());
    } catch (err) {
      dispatch(activationError(err));
      console.error(err);
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
export const activationStarted = () => {
  return {
    type: ACTIVATION_STARTED,
  };
};
export const activationSuccess = () => {
  return {
    type: ACTIVATION_SUCCESS,
  };
};
export const activationError = (payload) => {
  return {
    type: ACTIVATION_ERROR,
    payload,
  };
};
export const loginStarted = () => {
  return {
    type: LOGIN_STARTED,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};
export const loginError = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload,
  };
};
