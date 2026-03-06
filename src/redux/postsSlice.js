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

export const fetchComments = createAsyncThunk(
  "posts/fetchComments",
  async (postId) => {
    const response = await fetch(
      `https://www.reddit.com/comments/${postId}.json`
    );

    const json = await response.json();

    return {
      postId,
      comments: json[1].data.children
        .filter((child) => child.kind === 't1') // Filter to include only comment objects
        .map((child) => child.data),
    };
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
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;

        const post = state.posts.find((p) => p.id === postId);

        if (post) {
          post.comments = comments;
        }
      })
  },
});

export default postsSlice.reducer;