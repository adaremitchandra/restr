import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  loading: false,
  token: "",
  error: false,
};

export const authLogin = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("https://mobile.api.adaremit.co.id/v1/login", data);
    Cookies.set("token", res.data.access_token);
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginFulfilled: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    loginError: (state) => {
      state.pending = false;
      state.error = true;
    },
    authLogout: (state) => {
      Cookies.remove("token");
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { loginStart, loginFulfilled, loginError, authLogout } = authSlice.actions;

export default authSlice.reducer;
