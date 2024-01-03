import { SmallCalendar } from "../../../Components/Calendar/smallCalendar";
import { UpcomingEvents } from "./upcomingEvent";

export function EventSection() {
  return (
    <div className="max-w-full">
      <div className="w-96 flex flex-col justify-end">
        <SmallCalendar />
        <UpcomingEvents />
      </div>
    </div>
  );
}
