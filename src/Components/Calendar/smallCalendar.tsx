import { useEffect } from "react";

import { useSelector } from "react-redux";
import {
  fetchEventByUserId,
  selectEvents,
} from "../../features/Calendar/components/calendarSlice";
import { useAppDispatch } from "../../app/hook";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);
export const SmallCalendar = () => {
  const dispatch = useAppDispatch();

  const dates = useSelector(selectEvents);
  

  useEffect(() => {
    // Fetch events when the component mounts
    dispatch(fetchEventByUserId());
  }, [dispatch]);

 

  return (
    <div className="max-w-full realtive ">
      <Calendar
        localizer={localizer}
        events={dates}
        defaultView="month"
        // view="month"
        // views={["month"]}
        style={{ height: 400, width: 300 }}
      />
    </div>
  );
};
