import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});
