import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import apiService, {
  fetchdates,
  saveDates,
} from "../../../services/api.services";
import { IEventCard } from "../../../Components/Cards/events_card";

// type Event = {
//   userid: string;
//   title: string;
//   allDay: boolean;
//   start: Date;
//   end: Date;
// };

interface EventState {
  dates: Array<IEventCard>;
  status: "idle" | "loading" | "succeeded" | "failed" | "eventfetchedbyid"; // Change "fulfilled" to "succeeded"
  error: string;
}

const initialState: EventState = {
  dates: [],
  status: "idle",
  error: "",
};

// export const fetchdates = createAsyncThunk("date/fetch", async (id: string) => {
//   const response = await fetch(`http://localhost:3000/api/calendar/${id}`, {
//     method: "GET",
//   });
//   const data = response.json();
//   return data;
// });

export const fetchEventByUserId = createAsyncThunk(
  "event/fetchbyid",
  async () => {
    const response = await apiService.getEventsByUserId();

    return response.data;
  }
);

// export const saveDates = createAsyncThunk(
//   "date/save",
//   async (body: {
//     userid: string;
//     title: string;
//     start: Date;
//     allDay: boolean;
//     end: Date;
//   }) => {
//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/calendar/create",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body),
//         }
//       );

//       if (!response.ok) {
//         // Handle non-successful response (e.g., 4xx or 5xx status codes)
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       return data;
//     } catch (error: any) {
//       // Handle any network or other errors that might occur during the fetch.
//       throw new Error(`An error occurred: ${error.message}`);
//     }
//   }
// );

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
        state.status = "eventfetchedbyid";
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
