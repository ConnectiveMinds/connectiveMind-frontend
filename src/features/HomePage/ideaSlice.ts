import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../services/api.services";
import { RootState } from "../../app/store";

import { IProject } from "./Interface";

interface IProjectState {
  data: Array<IProject>;
  status:
    | "idle"
    | "loading"
    | "mygroupfetched"
    | "failed"
    | "allgroupfetched"
    | "projectdetailfetched"; // Change "fulfilled" to "succeeded"
  error: string;
}

const initialState: IProjectState = {
  data: [],
  status: "idle",
  error: "",
};

export const fetchProjectByUserId = createAsyncThunk(
  "idea/fetchbyid",
  async () => {
    const response = await apiService.getIdeaByUserId();
    return response.data;
  }
);

export const fetchallproject = createAsyncThunk("idea/fetchall", async () => {
  const response = await apiService.getAllProjects();
  return response.data;
});

export const removeMember = createAsyncThunk(
  "idea/removemember",
  async () => {}
);

export const fetchProjectByProjectId = createAsyncThunk(
  "idea/fetchmember",
  async (id: string) => {
    const response = await apiService.getIdeaByProjectId(id);

    return response.data;
  }
);

export const createproject = createAsyncThunk(
  "idea/create",
  async (body: IProject) => {
    const response = await apiService.createGroup(
      body.title!,
      body.description!,
      body.skills!
    );
    return response.data;
  }
);
export const IdeaSlice = createSlice({
  name: "Idea",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectByProjectId.fulfilled, (state, action) => {
        state.status = "projectdetailfetched";
        state.data = action.payload;
      })
      .addCase(fetchProjectByProjectId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectByProjectId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(fetchProjectByUserId.fulfilled, (state, action) => {
        state.status = "mygroupfetched";
        state.data = action.payload;
      })
      .addCase(fetchProjectByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(fetchallproject.fulfilled, (state, action) => {
        state.status = "allgroupfetched";
        state.data = action.payload;
      })
      .addCase(fetchallproject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchallproject.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error.message || "An error occurred";
      })
      .addCase(createproject.fulfilled, (state, action) => {
        state.status = "mygroupfetched";
        state.data = action.payload;
      })
      .addCase(createproject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createproject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

// export const { addEvent } = EventSlice.actions;
export const selectIdea = (state: RootState) => state.idea.data;
export const getIdeaError = (state: RootState) => state.idea.error;
export const getIdeaStatus = (state: RootState) => state.idea.status;

export default IdeaSlice.reducer;
