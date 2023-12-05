import { api } from "./apiServices";
import {
  group,
  ownerId,
  getchat,
  getGroupsByUserId,
  getallgroups,
} from "../utils/apiroutes";

export const createGroup = async (
  teamName: string,
  projectDescription: string,
  skillsRequired: string
) => {
  try {
    const response = await api.post(group, {
      ownerId: ownerId,
      title: teamName,
      description: projectDescription,
      skills: [skillsRequired],
      status: "open",
    });

    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const getmessages = async (projectId: string) => {
  try {
    const url = getchat + projectId;
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};
export const getAllProjects = async () => {
  try {
    const response = await api.get(getallgroups);

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};
export const getIdeaByUserId = async () => {
  try {
    const response = await api.get(getGroupsByUserId);

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};

export const updatejoinRequest = async (projectId: string) => {
  try {
    const response = await api.patch(group + projectId, {}, {});

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};
