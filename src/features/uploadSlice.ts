import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../app/store";
type File = {
  _id: string;
  filename: string;
  secure_url: string;
  format: string;
  sizeInByte: string;
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

export const getFiles = createAsyncThunk("file/fetch", async (id:string) => {
  try {
    
    const response = await fetch(`http://localhost:3000/api/file/files/${id}`, {
      method: "GET",
    });
    const data = response.json();
    return data;
    // console.log(data)
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
});

export const saveDatesWithFile = createAsyncThunk(
  "file/saveWithFile",
  async ({ body, projectId }: { body: FormData; projectId: string }, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3000/api/file/upload/${projectId}`, {
        method: "POST",
        body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
     
      const data = await response.json();
      return data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(`An error occurred: ${error.message}`);
    }
  }
);

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
      .addCase(getFiles.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(saveDatesWithFile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(saveDatesWithFile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Assuming the payload is an array, update as needed
      })
      .addCase(saveDatesWithFile.rejected, (state, action) => {
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
