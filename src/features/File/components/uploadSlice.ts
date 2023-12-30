import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFilesById, saveFile } from "../../../services/api.services";


type File = {
  _id: string;
  filename: string;
  secure_url: string;
  format: string;
  sizeInByte: string;
  project_id:string
};

interface FileState {
  data: File[];
  loading: boolean;
  error: string;
}

const initialState: FileState = {
  data: [],
  loading: false,
  error: "",
};

export const deleteFile = createAsyncThunk<void, string>(
  'file/deleteFile',
  async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/file/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        // Handle non-ok response (e.g., server error)
        const errorData = await response.text(); // Read as text
        throw new Error(`File deletion failed: ${errorData}`);
      }

      // File deletion was successful
      const data = await response.text(); // Read as text
      console.log(data); // Log the response data if needed
    } catch (error:any) {
      // Handle fetch errors or other errors
      console.error('Error during file deletion:', error.message);
      throw new Error(`File deletion failed: ${error.message}`);
    }
  }
);

export const FileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilesById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getFilesById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getFilesById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(saveFile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(saveFile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Assuming the payload is an array, update as needed
      })
      .addCase(saveFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(deleteFile.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(deleteFile.fulfilled, (state) => {
        state.loading = false;
        // You may update state.data if needed after file deletion
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred during file deletion';
      });
  },
});
export default FileSlice.reducer;
