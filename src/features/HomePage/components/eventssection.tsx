import { useEffect, useState } from "react";
import { IEventCard } from "../../../Components/Cards/events_card";
import { UpcomingEvents } from "./upcomingeEvents";

export function Events() {
  const [upcomingEventList, setUpcomningEventList] = useState<
    Array<IEventCard>
  >([]);

  useEffect(() => {
    setUpcomningEventList([]);
  }, []);

  return (
    <div className="max-w-full">
      <div className="w-96 flex flex-col justify-end">
        <UpcomingEvents events={upcomingEventList} />

        <UpcomingEvents events={upcomingEventList} />
        <div className="mt-auto"></div>
      </div>
    </div>
  );
}
