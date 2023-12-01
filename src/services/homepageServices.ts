/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  group,
  ownerId,
  AuthToken,
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
    const response = await axios.post(
      group,
      {
        ownerId: ownerId,
        title: teamName,
        description: projectDescription,
        skills: [skillsRequired],
        status: "open",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthToken,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const getmessages = async (projectId: string) => {
  try {
    const url = getchat + projectId;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthToken,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};
export const getAllProjects = async () => {
  try {
    const response = await axios.get(getallgroups, {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthToken,
      },
    });
    console.log(response);

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};
export const getIdeaByUserId = async () => {
  try {
    const response = await axios.get(getGroupsByUserId, {
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthToken,
      },
    });

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};

export const updatejoinRequest = async (projectId: string) => {
  try {
    const response = await axios.patch(
      group + projectId,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthToken,
        },
      }
    );

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};
