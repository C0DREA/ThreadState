import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    posts: [],
    loading: false,
    error: null,
};


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ({ subreddit, filter }) => {
        const response = await fetch(
            `https://www.reddit.com/r/${subreddit}/${filter}.json`
        );

        const data = await response.json();

        return data.data.children.map((post) => post.data);
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.data.children.map((child) => child.data);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
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
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to fetch posts';
            });
    }
});

export const {
    setPosts,
    setLoading,
    setError
} = postsSlice.actions;

export default postsSlice.reducer;