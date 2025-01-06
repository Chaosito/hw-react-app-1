import { UsersReducer } from "./UsersReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: UsersReducer,
    preloadedState: {
        user : null
    }
});

export default store;
