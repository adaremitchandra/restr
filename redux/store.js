import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./features/auth/authSlice";
import postReducer from "./features/posts/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    posts: postReducer,
  },
});
