import { IEventCard } from "../../../Components/Cards/events_card";

export interface IProject {
  _id: string;
  title?: string;
  ownerId?: string;
  description?: string;
  members?: IUser[];
  joinRequest?: IUser[];
  skills?: string[];
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  skills: string[];
  avatar: string;
  institution: string;
  address: string;
  gender: string;
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
  senderId?: IUser;
}

export interface IUpcomingEvent {
  events: IEventCard[];
}
