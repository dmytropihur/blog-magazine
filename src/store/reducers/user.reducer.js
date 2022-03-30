import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_STARTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "../actionTypes";

const initialState = {
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
      return { ...state, loading: true, error: false };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, error: false };
    case LOGIN_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
