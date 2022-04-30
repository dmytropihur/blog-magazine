import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../constants/constants";
import { useGetCookie } from "../helpers/useGetCookie";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async function (payload, { rejectWithValue }) {
    const accessToken = useGetCookie("accessToken");
    console.log(accessToken);
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
  "posts/getsPosts",
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
  },
});

export default postsSlice.reducer;
