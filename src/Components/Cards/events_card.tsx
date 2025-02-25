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
  const [starttimeRemaining, setStartTimeRemaining] = useState(
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
      if (difference <= 0) {
        return { timerColor: "red" };
      } else {
        return {
          timerColor: "green",
        };
      }
    } else {
      return { timerColor: "blue" };
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStartTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeRemaining]);

  const { timerColor } = starttimeRemaining;

  return (
    <div
      className={`relative h-15 bg-white rounded-lg mr-4 mt-4 flex flex-col justify-between text-black text-xl font-normal font-['Inter'] 
                  shadow-md transition-transform duration-300 transform hover:translate-y-[-4px]`}
    >
      <div
        className={`absolute top-2 right-2 h-4 w-4 rounded-full bg-${timerColor}-500`}
      ></div>
      <p className="ml-3 mt-2 mb-4 overflow-x-clip overflow-y-clip">
        {props.title}
      </p>
      <p className="ml-3 mt-2 overflow-x-clip overflow-y-clip">
        Project: {props.projectid.title}
      </p>
    </div>
  );
}
