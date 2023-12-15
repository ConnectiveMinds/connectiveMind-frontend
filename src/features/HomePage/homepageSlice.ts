import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/api.services";
import { RootState } from "../../app/store";
import { IHomePage } from "./pages/HomePage";

interface IHomePageState {
  data: Array<IHomePage>;
  status: "idle" | "loading" | "succeeded" | "failed"; // Change "fulfilled" to "succeeded"
  error: string;
}

const initialState: IHomePageState = {
  data: [],
  status: "idle",
  error: "",
};

export const fetchProjectByUserId = createAsyncThunk("idea/fetch", async () => {
  const response = await apiService.getIdeaByUserId();
  return response.data;
});
export const HomepageSlice = createSlice({
  name: "HomePage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectByUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProjectByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

// export const { addEvent } = EventSlice.actions;
export const selectHomePage = (state: RootState) => state.homepage.data;
export const getHomePageError = (state: RootState) => state.homepage.error;
export const getHomePageStatus = (state: RootState) => state.homepage.status;

export default HomepageSlice.reducer;
