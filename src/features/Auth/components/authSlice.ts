import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface AuthState {
  token: string | null;
  userId: string | null;
}

export interface UserAuthState {
  user: AuthState | null;
}
const initialState: UserAuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: AuthState }>) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          data: action.payload.user,
        })
      );

      state.user = action.payload.user;
    },
    logoutUser: () => {
      localStorage.removeItem("user");
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
