/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  acceptrequest,
  crudchat,
  declinerequest,
  getGroupsByUserId,
  getallgroups,
  getchat,
  group,
  host,
  incomingRequest,
  sentRequest,
} from "../utils/apiroutes";

export const api = axios.create({ baseURL: `${host}/api` });

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user")!);

    // const token = localStorage.getItem("token");
    if (user != null) {
      config.headers.Authorization = `Bearer ${user.data.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

//****************************idea api services ***************************
export const createGroup = async (
  teamName: string,
  projectDescription: string,
  skillsRequired: string
) => {
  try {
    const response = await api.post(group, {
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
//*****************************************request api services****************************************
export const updatejoinRequest = async (projectId: string) => {
  try {
    const response = await api.patch(group + projectId, {}, {});

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};
export const getIncomingRequest = async () => {
  try {
    const response = await api.get(incomingRequest);

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};

export const getSentRequset = async () => {
  try {
    const response = await api.get(sentRequest);
    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};

export const declineRequest = async (projectId: string, requestId: string) => {
  try {
    const response = await api.patch(declinerequest + projectId, {
      requestId: requestId,
    });

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};

export const acceptRequest = async (projectId: string, requestId: string) => {
  try {
    const response = await api.patch(acceptrequest + projectId, {
      requestId: requestId,
    });

    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};

//*****************************************chat api services****************************************
export const saveChat = async (message: string, projectId: string) => {
  try {
    const response = await api.post(crudchat, {
      message: message,
      projectId: projectId,
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
