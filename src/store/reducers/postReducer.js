import {
  CREATING_POST_STARTED,
  CREATING_POST_SUCCESS,
  CREATING_POST_ERROR,
} from "../actionTypes";

const initialState = {
  posts: null,
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATING_POST_STARTED:
      return { ...state, loading: true };
    case CREATING_POST_SUCCESS:
      return { ...state, loading: false };
    case CREATING_POST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
