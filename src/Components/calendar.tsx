import { Calendar, momentLocalizer } from "react-big-calendar";
import React, {  useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import {
  getEventsError,
} from "../features/Calendar/components/calendarSlice";
import { useSelector } from "react-redux";
import {  getDatesbyProjectId, getIdeaByProjectId } from "../services/api.services";
import { IMember } from "../features/HomePage/Interface";
import { EventForm } from "./eventform";
import { IEventCard } from "./Cards/events_card";

const localizer = momentLocalizer(moment);


export const MyCalendar = ({ _id }) => {
  const [dates,setDates] = useState<IEventCard[]>();
  const eventsError = useSelector(getEventsError);
  const [idea, setIdea] = useState<IMember>();
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDatesbyProjectId(_id).then((data)=>
    {
      console.log(data)
      setDates(data);
    })
  }, []);

  useEffect(() => {
    getIdeaByProjectId(_id).then((data) => {
      setIdea(data.data);
    });
    setCurrentUser(JSON.parse(localStorage.getItem("user")!).data.userId);
  }, [idea]);

  useEffect(() => {
    if (eventsError) {
      console.error(eventsError);
    }
  }, [eventsError]);

  const handleClick = () => {
    setShow(true);
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };
 
    

  const eventStyleGetter = (event) => {
    const backgroundColor = event.allday ? 'yellow' : '#ED5694';
    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',


      },

    };
  };
  return (
    <div className="myCustomHeight w-full mx-4 h-screen">
      {show && (
        <EventForm _id={_id} onClose={() => setShow(false)} onLoading={handleLoading} />
      )}
      {idea?.ownerId == currentUser && !loading && (
        <div className="mb-4 text-right">
          <button
            className="bg-purple-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleClick}
          >
            <span>Add Event</span>
          </button>
        </div>
      )}

      {!show && !loading && (
        <Calendar
        
          localizer={localizer}
          events={dates}
          startAccessor="start"
          endAccessor="end"
          
          eventPropGetter={eventStyleGetter}
        />
      )}
    </div>
  );
};
