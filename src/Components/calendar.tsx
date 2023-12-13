import { Calendar, momentLocalizer } from "react-big-calendar";
import React, { useEffect } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
// import events from "./events";
import "../style.css";
import { fetchdates, getEventsError, selectEvents } from "../features/calendarSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hook";





const localizer = momentLocalizer(moment) // or globalizeLocalizer



export const MyCalendar = () =>
{ 
  const dispatch = useAppDispatch();
  const { dates } = useSelector(selectEvents); 
  const eventsError = useSelector(getEventsError);
  // const eventStatus = useSelector(getEventStatus);

  useEffect(() => {
    // Fetch events when the component mounts
    dispatch(fetchdates("653a44795328fe2e14ee76bf"));
   
  }, [dispatch]);
  useEffect(() => {
    // Check if there is an error and log it
    if (eventsError) {
      console.error(eventsError);
      // You can add additional error handling or UI feedback here
    }
  }, [eventsError]);
  return(
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={dates}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
    />
  </div>
)
}