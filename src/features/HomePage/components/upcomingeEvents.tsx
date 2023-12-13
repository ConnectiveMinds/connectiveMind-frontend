import { EventCard } from "../../../Components/Cards/events_card";
import { IUpcomingEvent } from "../Interface";

export function UpcomingEvents(props: IUpcomingEvent) {
  return (
    <div className="flex h-[464px] flex-col overflow-y-auto">
      <div className="text-black text-3xl font-normal font-['Inter']">
        <p>Upcoming Events</p>
      </div>
      {props.events.length == 0 ? (
        <p className="text-center pt-3 text-gray-400">No Upcoming Events</p>
      ) : (
        <>
          {props.events.map((event) => {
            console.log(event);
            return (
              <EventCard
                key={event._id}
                _id={event._id}
                title={event.title}
                time={event.time}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
