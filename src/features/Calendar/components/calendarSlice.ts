import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import apiService, {
  fetchdates,
  saveDates,
} from "../../../services/api.services";
import { IEventCard } from "../../../Components/Cards/events_card";



interface EventState {
  dates: Array<IEventCard>;
  status: "idle" | "loading" | "succeeded" | "failed"; // Change "fulfilled" to "succeeded"
  error: string;
}

const initialState: EventState = {
  dates: [],
  status: "idle",
  error: "",
};



export const fetchEventByUserId = createAsyncThunk(
  "event/fetchbyid",
  async () => {
    const response = await apiService.getEventsByUserId();
    return response.data;
  }
);



export const EventSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    // addEvent: (state, action: PayloadAction<Event>) => {
    //   const date = action.payload;
    //   state.dates.push(date);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dates = action.payload;
      })
      .addCase(fetchdates.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchdates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(fetchEventByUserId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dates = action.payload;
      })
      .addCase(fetchEventByUserId.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchEventByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })
      .addCase(saveDates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dates = [...state.dates, action.payload];
      })
      .addCase(saveDates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveDates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

// export const { addEvent } = EventSlice.actions;
export const selectEvents = (state: RootState) => state.dates.dates;
export const getEventsError = (state: RootState) => state.dates.error;
export const getEventStatus = (state: RootState) => state.dates.status;

export default EventSlice.reducer;