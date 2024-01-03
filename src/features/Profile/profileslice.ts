import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/api.services";
import { RootState } from "../../app/store";
import { IUser } from "../HomePage/Interface";

interface IProfileState {
  data: IUser;
  status:
    | "idle"
    | "loading"
    | "failed"
    | "fetched"
    | "imageupdated"
    | "userdetailsupdated"; // Change "fulfilled" to "succeeded"
  error: string;
}

const initialState: IProfileState = {
  data: {
    _id: "",
    name: "",
    email: "",
    avatar: "",
    skills: [],
    institution: "",
    address: "",
    gender: "",
  },
  status: "idle",
  error: "",
};

export const getProfile = createAsyncThunk("profile/get", async () => {
  const response = await apiService.getProfile();
  return response.data;
});

export const updateProfileImage = createAsyncThunk(
  "profile/updateprofile",
  async (image: File) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await apiService.updateProfileImage(image, config);

    return response.data;
  }
);
export const updateProfile = createAsyncThunk(
  "profile/update",
  async (body: IUser) => {
    const response = await apiService.updateProfile(body);
    return response.data;
  }
);
export const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "fetched";

        state.data = action.payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })

      .addCase(updateProfileImage.fulfilled, (state, action) => {
        state.status = "imageupdated";
        state.data = action.payload;
      })
      .addCase(updateProfileImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "userdetailsupdated";
        state.data = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

// export const { addEvent } = EventSlice.actions;
export const selectUser = (state: RootState) => state.profile.data;
export const getProfileError = (state: RootState) => state.profile.error;
export const getProfileStatus = (state: RootState) => state.profile.status;

export default profileSlice.reducer;
