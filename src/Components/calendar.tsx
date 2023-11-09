import { Calendar, momentLocalizer } from "react-big-calendar";

import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment';
import events from "./events";
import "../style.css";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.


const localizer = momentLocalizer(moment) // or globalizeLocalizer



export const MyCalendar = () => (
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)