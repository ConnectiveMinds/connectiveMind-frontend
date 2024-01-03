import { Calendar, momentLocalizer } from "react-big-calendar";
import React, { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import {
  fetchEventByUserId,
  getEventsError,
  selectEvents,
} from "../../features/Calendar/components/calendarSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hook";
import { getIdeaByProjectId } from "../../services/api.services";
import { IMember } from "../../features/HomePage/Interface";
import { EventForm } from "../eventform";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const MyCalendar = ({ _id }) => {
  const dispatch = useAppDispatch();
  const dates = useSelector(selectEvents);
  const eventsError = useSelector(getEventsError);
  // const eventStatus = useSelector(getEventStatus);

  useEffect(() => {
    // Fetch events when the component mounts
    dispatch(fetchEventByUserId);
  }, [dispatch]);
  const [idea, setIdea] = useState<IMember>();
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    getIdeaByProjectId(_id).then((data) => {
      setIdea(data.data);
    });
    setCurrentUser(JSON.parse(localStorage.getItem("user")!).data.userId);
  }, [idea]);
  useEffect(() => {
    console.log(dates);
    // Check if there is an error and log it
    if (eventsError) {
      console.error(eventsError);
      // You can add additional error handling or UI feedback here
    }
  }, [eventsError]);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="myCustomHeight w-full mx-4 h-screen">
      {idea?.ownerId == currentUser && (
        <div className="mb-4 text-right">
          <button
            className="bg-purple-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleClick}
          >
            <span>Add Event</span>
          </button>
        </div>
      )}

      {!show && (
        <Calendar
          localizer={localizer}
          events={dates}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
        />
      )}
      {show && (
        <EventForm
          _id={_id}
          onClose={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};
