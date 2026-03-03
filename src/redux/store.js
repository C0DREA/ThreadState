import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import postsReducer from './postsSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        posts: postsReducer,
    },
})