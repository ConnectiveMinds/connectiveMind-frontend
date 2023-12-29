import { useEffect } from "react";

import { useSelector } from "react-redux";
import {
  fetchEventByUserId,
  selectEvents,
} from "../features/Calendar/components/calendarSlice";
import { useAppDispatch } from "../app/hook";
import "react-calendar/dist/Calendar.css";
import { MyCalendar } from "./calendar";

export const SmallCalendar = ({id}) => {
  const dispatch = useAppDispatch();
 
  const dates = useSelector(selectEvents);
  const dateValues = dates.map((event) => new Date(event.start));

  useEffect(() => {
    // Fetch events when the component mounts
    dispatch(fetchEventByUserId());
  }, [dispatch]);



  const formattedDateValues = dateValues.map((date) => date.toISOString().split('T')[0]);
  const dateObjects = formattedDateValues.map((dateString) => new Date(dateString));
  console.log(dateObjects);

  return (
    <div className="w-full">
      <div className="w-1/3 h-1/3">
      <MyCalendar _id={id}/>
      </div>
    </div>
  );
};
