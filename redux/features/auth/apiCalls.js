import axios from "axios";
import { loginStart, loginFulfilled, loginError } from "./authSlice";

export const userLogin = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://mobile.api.adaremit.co.id/v1/login", user);
    dispatch(loginFulfilled(res.data));
  } catch (err) {
    dispatch(loginError());
  }
};
