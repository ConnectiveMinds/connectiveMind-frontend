// import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../app/store";

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

type Event = {
    userid:string,
    title:string,
    allDay: boolean,
    start: Date,
    end: Date
}

interface EventState{
    dates:Array<Event>
}

const initialState: EventState ={
    dates:[]

}

export const EventSlice = createSlice(
    {
        name: "date",
        initialState,
        reducers:
        {
            addEvent:(state,action:PayloadAction<Event>)=>
            {
                const  date= action.payload;
                state.dates.push(date)
            },
        }
    }
)

export const {addEvent } = EventSlice.actions;
export const selectEvents = (state:RootState)=>state.dates;

export default EventSlice.reducer;
