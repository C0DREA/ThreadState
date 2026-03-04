import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ subreddit, filter }) => {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/${filter}.json` // Reddit API endpoint for fetching posts based on subreddit and filter
    );

    const data = await response.json();

    return data.data.children.map((post) => post.data);
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}, // no manual reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch posts";
      });
  },
});

export default postsSlice.reducer;