import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import dateReducer from "../features/Calendar/components/calendarSlice";
import fileReducer from "../features/uploadSlice";
import authReducer from "../features/Auth/components/authSlice";
import homepageReducer from "../features/HomePage/homepageSlice";
// import { dateApi } from "../services/calendarApi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    dates: dateReducer,
    files: fileReducer,
    homepage: homepageReducer,
    // [dateApi.reducerPath]:dateApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
