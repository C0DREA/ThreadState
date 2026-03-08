// store.js
// Redux store configuration for the Reddit client app
// Combines the uiSlice and postsSlice reducers to create the global state store
// The store is created using configureStore from Redux Toolkit, which simplifies the setup process and includes useful defaults like the Redux DevTools extension and middleware for handling async actions
// The store's state will have two main slices: 'ui' for managing UI-related state (like search term and selected post) and 'posts' for managing the fetched Reddit posts and their comments
// The store is exported for use in the main application entry point (index.js) where it will be provided to the React app using the Provider component from react-redux

import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import postsReducer from './postsSlice';

// Create the Redux store by combining the ui and posts reducers
export const store = configureStore({
    // The reducer object defines the different slices of state and their corresponding reducers
    reducer: {
        ui: uiReducer,
        posts: postsReducer,
    },
})