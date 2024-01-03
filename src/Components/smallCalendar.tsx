import { useEffect } from "react";

import { useSelector } from "react-redux";
import {
  fetchEventByUserId,
  selectEvents,
} from "../features/Calendar/components/calendarSlice";
import { useAppDispatch } from "../app/hook";
import "react-calendar/dist/Calendar.css";
import { MyCalendar } from "./calendar";

export const SmallCalendar = () => {
  const dispatch = useAppDispatch();

  const dates = useSelector(selectEvents);
  const dateValues = dates.map((event) => new Date(event.start));

  useEffect(() => {
    // Fetch events when the component mounts
    dispatch(fetchEventByUserId());
  }, [dispatch]);

  const formattedDateValues = dateValues.map(
    (date) => date.toISOString().split("T")[0]
  );
  const dateObjects = formattedDateValues.map(
    (dateString) => new Date(dateString)
  );
  console.log(dateObjects);

  return (
    <div className="w-full">
      <div className="text-black text-3xl font-normal font-['Inter']">
        <p>Your Calendar</p>
      </div>
      <div className="w-fit h-81">
        <MyCalendar _id={""} />
      </div>
    </div>
  );
};
