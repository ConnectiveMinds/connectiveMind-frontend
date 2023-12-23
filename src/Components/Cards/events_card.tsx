import { useState, useEffect } from "react";
import { IProject } from "../../features/HomePage/Interface";

export interface IEventCard {
  _id: string;
  title: string;
  projectid: IProject;
  start: string;
  end: string;
}
export function EventCard(props: IEventCard) {
  const [starttimeRemaining, setstartTimeRemaining] = useState(
    calculateTimeRemaining()
  );

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const start = new Date(props.start).getTime();
    const end = new Date(props.start).getTime();

    let difference = start - now;

    if (difference <= 0) {
      // Timer has reached or passed the future time
      difference = end - now;
    }
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isStarted: false,
        isPassed: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isStarted: false, isPassed: false };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setstartTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const { days, hours, minutes, seconds, isStarted, isPassed } =
    starttimeRemaining;

  return (
    <div className="  relative h-18 bg-zinc-300 rounded-lg mr-4 mt-4 flex flex-col justify-between text-black text-xl font-normal font-['Inter']">
      <p className="ml-2 mt-2 overflow-x-clip overflow-y-clip">{props.title}</p>
      <p>Project:{props.projectid.title}</p>
      <p className="ml-4 mt-2 mr-4 overflow-x-clip overflow-y-clip">
        {isStarted && !isPassed ? "Ends In: " : isPassed ? null : "In: "}
        {days != 0
          ? `${days}Days`
          : hours != 0
          ? `${hours} hrs`
          : minutes != 0
          ? ` ${minutes} min`
          : seconds != 0
          ? ` ${seconds} secs`
          : null}
      </p>
    </div>
  );
}
