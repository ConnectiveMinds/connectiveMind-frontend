import { UpcomingEvents } from "./upcomingEvent";

export function EventSection() {
  return (
    <div className="max-w-full">
      <div className="w-96 flex flex-col justify-end">
        <UpcomingEvents />
      </div>
    </div>
  );
}
