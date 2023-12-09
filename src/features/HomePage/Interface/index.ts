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
  members?: [IUser];
}

export interface IRequest extends IProject {
  joinRequest: [IUser];
}
