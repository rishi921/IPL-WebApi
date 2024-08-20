import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';
import matchReducer from './matchSlice';

export const store = configureStore({
    reducer: {
        players: playerReducer,
        matches: matchReducer,
    },
});
