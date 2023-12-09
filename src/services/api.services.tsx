/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import {
  acceptrequest,
  crudchat,
  declinerequest,
  getGroupsByUserId,
  getallgroups,
  getchat,
  getprojectbyid,
  group,
  host,
  incomingRequest,
  removeMemberById,
  sentRequest,
  userSignUp,
  postReview,
  getReview,
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
//****************************auth api services ***************************
export const signUp = async (
  name: string,
  email: string,
  password: string,
  phoneNo: number
) => {
  try {
    console.log("hello");

    const response = await api.post(userSignUp, {
      name: name,
      email: email,
      password: password,
      status: "open",
      gender: "M",
      phoneNo: phoneNo,
      address: "afnfsnn",
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log("inside catch");

    throw new Error(`Error: ${error.message}`);
  }
};

//****************************idea api services ***************************
export const createGroup = async (
  teamName: string,
  projectDescription: string,
  skillsRequired: string[]
) => {
  try {
    const response = await api.post(group, {
      title: teamName,
      description: projectDescription,
      skills: skillsRequired,
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
export const getIdeaByProjectId = async (projectId: string) => {
  try {
    const response = await api.get(getprojectbyid + projectId);
    return response.data;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
    /* empty */
  }
};
export const removeMemberByUserId = async (
  projectId: string,
  memberId: string
) => {
  try {
    const response = await api.patch(removeMemberById + projectId, {
      memberId: memberId,
    });
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
//*****************************************review api services****************************************
export const createReview = async (review: string) => {
  try {
    const response = await api.post(postReview, {
      review: review,
      status: open,
    });
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getReviews = async () => {
  try {
    const response = await api.get(getReview);
    console.log(response.data);

    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};