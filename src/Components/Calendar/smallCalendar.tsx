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
        <Calendar
          localizer={localizer}
          events={dates}
          defaultView="month"
          view="month"
          views={["month"]}
          style={{ height: 400, width: 300 }}
        />
      </div>
    </div>
  );
};
