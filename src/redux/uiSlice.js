import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    selectedSubreddit: 'popular',
    selectedPost: null,
    filter: 'hot',
};

const uiSlice = createSlice ({
    name: 'ui',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    },
});

export const {
    setSearchTerm,
    setSubreddit,
    setSelectedPost,
    setFilter,
    toggleTheme,
} = uiSlice.actions;

export default uiSlice.reducer;