import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../constants/constants";
import { useGetCookie } from "../helpers/useGetCookie";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async function (payload, { rejectWithValue }) {
    const accessToken = useGetCookie("accessToken");
    try {
      await axios.post(`${URL}/posts`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async function (_, { rejectWithValue }) {
    try {
      const posts = await axios
        .get(`${URL}/posts`)
        .then((response) => response.data);
      console.log(posts);
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async function (payload, { dispatch, rejectWithValue }) {
    const accessToken = useGetCookie("accessToken");
    try {
      await axios
        .delete(`${URL}/posts/${payload}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(dispatch(getMyPosts()));
      console.log(posts);
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const getMyPosts = createAsyncThunk(
  "posts/getMyPosts",
  async function (_, { rejectWithValue }) {
    const accessToken = useGetCookie("accessToken");
    try {
      const posts = await axios
        .get(`${URL}/posts/my`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data);
      console.log(posts);
      return posts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      (state.status = "loading"), (state.error = "null");
    },
    [createPost.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [createPost.rejected]: (state, action) => {
      (state.status = "rejected"), (state.error = action.payload);
    },
    [getPosts.pending]: (state) => {
      (state.status = "loading"), (state.error = "null");
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      (state.status = "rejected"), (state.error = action.payload);
    },
    [getMyPosts.pending]: (state) => {
      (state.status = "loading"), (state.error = "null");
    },
    [getMyPosts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "resolved";
      state.posts = action.payload;
    },
    [getMyPosts.rejected]: (state, action) => {
      (state.status = "rejected"), (state.error = action.payload);
    },
    [deletePost.pending]: (state) => {
      (state.status = "loading"), (state.error = "null");
    },
    [deletePost.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [deletePost.rejected]: (state, action) => {
      (state.status = "rejected"), (state.error = action.payload);
    },
  },
});

export default postsSlice.reducer;
