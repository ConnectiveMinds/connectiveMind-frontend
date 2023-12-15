import { IProject } from "../../features/HomePage/Interface";

export interface IEventCard {
  _id: string;
  title: string;
  projectid: IProject;
  start: string;
  end: string;
}
export function EventCard(props: IEventCard) {
  return (
    <div className="  relative h-12 bg-zinc-300 rounded-lg mr-4 mt-4 flex flex-row justify-between text-black text-xl font-normal font-['Inter']">
      <p className="ml-2 mt-2 overflow-x-clip overflow-y-clip">{props.title}</p>
      <p className="ml-4 mt-2 mr-4 overflow-x-clip overflow-y-clip">
        In:{props.start}
      </p>
    </div>
  );
}
