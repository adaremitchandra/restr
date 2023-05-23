import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import debounce from "debounce-promise";

const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  debounce(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("first");
    return response.data;
  }, 1000)
);

export const fetchMore = createAsyncThunk("posts/fetchMore", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = [...state.posts, { id: 101, title: "TAmbah asdnajsnd kajlsndansjkdbaisdjiabsjdbaisbdaibsdiabsidbaisudbaisbdiuabsidabs" }];
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
