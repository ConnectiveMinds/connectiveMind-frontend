/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  creategroup,
  ownerId,
  AuthToken,
  getchat,
  getGroupsByUserId,
} from "../utils/apiroutes";

export const createGroup = async (
  teamName: string,
  projectDescription: string,
  skillsRequired: string
) => {
  try {
    const response = await axios.post(
      creategroup,
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
