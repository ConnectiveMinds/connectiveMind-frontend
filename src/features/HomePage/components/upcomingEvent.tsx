import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchEventByUserId,
  getEventStatus,
  selectEvents,
} from "../../Calendar/components/calendarSlice";
import { useAppDispatch } from "../../../app/hook";
import { EventCard, IEventCard } from "../../../Components/Cards/events_card";

export function UpcomingEvents() {
  const dispatch = useAppDispatch();
  const [upcomingEventList, setUpcomningEventList] = useState<
    Array<IEventCard>
  >([]);
  const [currentstatus, setCurrentStatus] = useState<string>();
  const eventStatus = useSelector(getEventStatus);
  const events = useSelector(selectEvents);

  useEffect(() => {
    if (eventStatus === "idle") {
      dispatch(fetchEventByUserId());
    } else if (eventStatus == "loading") {
      setCurrentStatus("Loading");
    } else if (eventStatus == "eventfetchedbyid") {
      setUpcomningEventList(events);
      setCurrentStatus("No Upcoming Request");
    } else if (eventStatus == "failed") {
      setCurrentStatus("Error Fetching");
    }
  }, [eventStatus, dispatch]);

  return (
    <div>
      <div className="flex h-[464px] flex-col overflow-y-auto">
        <div className="text-black text-3xl font-normal font-['Inter']">
          <p>Upcoming Events</p>
        </div>
        {upcomingEventList.length == 0 ? (
          <p className="text-center pt-3 text-gray-400">{currentstatus}</p>
        ) : (
          <>
            {upcomingEventList.map((event) => {
              return (
                <EventCard
                  key={event._id}
                  _id={event._id}
                  title={event.title}
                  start={event.start}
                  projectid={event.projectid}
                  end={""}
                />
              );
            })}
          </>
        )}
      </div>
      <div className="mt-auto"></div>
    </div>
  );
}
