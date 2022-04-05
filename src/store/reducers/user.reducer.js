import {
  SET_USER_STATE,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ACTIVATION_STARTED,
  ACTIVATION_SUCCESS,
  ACTIVATION_ERROR,
  REGISTRATION_STARTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "../actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_STARTED:
      return { ...state, loading: true, error: null };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case REGISTRATION_ERROR:
      return {
        loading: false,
        error: action.payload.message,
      };
    case LOGIN_STARTED:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_ERROR:
      return { loading: false, error: action.payload };
    case ACTIVATION_STARTED:
      return { ...state, loading: true };
    case ACTIVATION_SUCCESS:
      return { ...state, loading: false };
    case ACTIVATION_ERROR:
      return { loading: false, error: action.payload };
    case SET_USER_STATE:
      return { ...state, user: action.payload, loading: false, error: null };
    default:
      return state;
  }
};
