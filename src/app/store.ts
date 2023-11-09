import { configureStore, } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import {setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from  "../features/authSlice"
import dateReducer from  "../features/calendarSlice"
export const store = configureStore(
    {
        reducer:
        {
            auth:authReducer,
            [authApi.reducerPath]:authApi.reducer,
            dates:dateReducer,
        },
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware),
    }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);