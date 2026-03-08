// uiSlice.js
// Redux slice responsible for managing UI-related state in the Reddit client app
// This includes the current theme (light/dark) - which will be later implemented, search term, selected subreddit, selected post, and filter type
// The slice uses createSlice from Redux Toolkit to define the initial state and reducers for updating the UI state
// The reducers include actions for setting the search term, selected subreddit, selected post, filter type, and toggling the theme between light and dark modes - which will be implemented in the future
// The slice's actions and reducer are exported for use in the Redux store and throughout the app to manage UI state changes in response to user interactions
// Note: The theme toggle functionality is included in the slice but not yet implemented in the UI components. This will be added in a future update to allow users to switch between light and dark themes

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the UI slice, including theme, search term, selected subreddit, selected post, and filter type
const initialState = {
    theme: 'light',
    searchTerm: '',
    selectedSubreddit: 'popular',
    selectedPost: null,
    filter: 'hot',
};

// Create the uiSlice using createSlice from Redux Toolkit
const uiSlice = createSlice ({
    name: 'ui',
    initialState,
    // Reducers for updating the UI state based on user interactions
    reducers: {
        // Action to set the search term in the state
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        // Action to set the selected subreddit in the state
        setSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        },
        // Action to set the selected post in the state
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        // Action to set the filter type (e.g., hot, new, top) in the state
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        // Action to toggle the theme between light and dark modes - this will be implemented in the UI components in a future update
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    },
});

// Export the actions and reducer from the uiSlice for use in the Redux store and throughout the app
export const {
    setSearchTerm,
    setSubreddit,
    setSelectedPost,
    setFilter,
    toggleTheme,
} = uiSlice.actions;

// Export the reducer to be included in the Redux store configuration
export default uiSlice.reducer;