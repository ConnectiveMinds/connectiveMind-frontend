import { IChatCard } from "../../../Components/Cards/chat_card";
import { IEventCard } from "../../../Components/Cards/events_card";

export interface IProject {
  _id: string;
  title?: string;
  ownerId?: string;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IMember extends IProject {
  members?: IUser[];
}

export interface IRequest extends IProject {
  joinRequest: IUser[];
}

export interface IChat {
  message?: string;
  projectId: string;
  senderId?: IChatCard;
}

export interface IUpcomingEvent {
  events: IEventCard[];
}
