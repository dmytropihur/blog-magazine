import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../constants/constants";
import { setAccessCookie } from "../helpers/setAccessCookie";
import { setRefreshCookie } from "../helpers/setRefreshCookie";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async function (payload, { rejectWithValue }) {
    try {
      await axios.post(`${URL}/auth/registration`, payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async function (payload, { rejectWithValue }) {
    try {
      const res = await axios
        .get(`${URL}/auth/current`, {
          headers: {
            Authorization: `Bearer ${payload}`,
          },
        })
        .then((response) => response.data);
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async function (payload, { rejectWithValue, dispatch }) {
    try {
      const { refreshToken, accessToken, r_exp, a_exp } = await axios
        .post(`${URL}/auth/login`, payload)
        .then((response) => response.data);

      setAccessCookie(accessToken, a_exp);
      setRefreshCookie(refreshToken, r_exp);

      dispatch(fetchUser(accessToken));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const activateUser = createAsyncThunk(
  "user/activateUser",
  async function (payload, { rejectWithValue }) {
    try {
      await axios.get(`${URL}/auth/activate/${payload}`);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: null,
    error: null,
  },
  reducers: {
    setUserState(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [registerUser.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [loginUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [loginUser.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { setUserState, logout } = userSlice.actions;
export default userSlice.reducer;
