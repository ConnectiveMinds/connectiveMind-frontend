/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosRequestConfig } from "axios";
import {
  geteventsbyuserid,
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
  sendotp,
  verifyotp,
  getFiles,
  postFiles,
  getdates,
  postdates,
  createprofile,
  getprofile,
  updateprofile,
  deleteFies,
  getdatesbyProject
  
} from "../utils/apiroutes";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const api = axios.create({
  baseURL: `${host}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const url: string = config.url!;

    if (url.includes("auth") || url.includes("user") || url.includes("otp")) {
      return config;
    } else {
      const user = JSON.parse(localStorage.getItem("user")!);

      if (user != null) {
        config.headers.Authorization = `Bearer ${user.data.token}`;
      }
      return config;
    }

    // const token = localStorage.getItem("token");
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
    const response = await api.post(userSignUp, {
      name: name,
      email: email,
      password: password,
      status: "open",
      // gender: "M",
      phoneNo: phoneNo,
      // address: "afnfsnn",
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log("inside catch");

    throw new Error(`Error: ${error.message}`);
  }
};
export const sendOTP = async (email: string) => {
  try {
    const response = await api.post(sendotp, {
      email: email,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const verifyOTP = async (email: string, otp: number) => {
  try {
    const response = await api.post(verifyotp, {
      email: email,
      otp: otp,
    });

    return response.data;
  } catch (error: any) {
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

    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

//*************************************************calendar Service************************************************************ */
const getEventsByUserId = async () => {
  try {
    const response = await api.get(geteventsbyuserid);
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
const apiService = {
  createGroup,
  getEventsByUserId,
  getAllProjects,
  getIdeaByUserId,
  getIdeaByProjectId,
  getIncomingRequest,
};

export default apiService;
//files//
export const getFilesById = 
  async (id: string) => {
    try {
      console.log("using");
      // Use the axios instance to make the GET request
      const url = getFiles + id;
      const response = await api.get(url);

      // Check if the response is ok
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse and return the response data
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      // Handle errors
      throw new Error(`An error occurred: ${error.message}`);
    }
  }




export const saveFile = createAsyncThunk(
  "file/saveFile",
  async ({ body, config }: { body: FormData; config: AxiosRequestConfig }, thunkAPI) => {
    try {
      const url = postFiles;
      const response = await api.post(url, body, config);
     
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming the response.data is already a JSON object
      // If not, you might need to parse it based on your server response
      return response.data;
    } catch (error: any) {
      // Here you can access the error message directly
      return thunkAPI.rejectWithValue(`An error occurred: ${error.message}`);
    }
  }
);

export const deleteFile = createAsyncThunk<void, string>(
  'file/deleteFile',
  async (id: string) => {
    try {
      const url = deleteFies + id
      console.log(url)
      const response = await api.delete(url);
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // File deletion was successful
      return response.data;
  } catch (error: any) {
    // Handle errors
    throw new Error(`An error occurred: ${error.message}`);
  }
});





//calendar//

export const fetchdates = createAsyncThunk("date/fetch", async (id: string) => {
  try {
    // Use the axios instance to make the GET request
    const url = getdates + id;
    const response = await api.get(url);

    // Check if the response is ok
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the response data
    return response.data;
  } catch (error: any) {
    // Handle errors
    throw new Error(`An error occurred: ${error.message}`);
  }
});

export const saveDates = createAsyncThunk(
  "date/saveDates",
  async (
    {
      body,
      projectId,
    }: {
      body: {
        title: string;
        start: Date;
        end: Date;
        assigned_id: string[];
        isOwner: boolean;
      };
      projectId: string;
    },
    thunkAPI
  ) => {
    try {
      const url = postdates + projectId;
      console.log(body);
      const response = await api.post(url, body);

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.data;
    } catch (error: any) {
      // Here you can access the error message directly
      return thunkAPI.rejectWithValue(`An error occurred: ${error.message}`);
    }
  }
);
export const getDatesbyProjectId = async (id: string) => {
  try {
    // Use the axios instance to make the GET request
    const url = getdatesbyProject + id;
    const response = await api.get(url);

    // Check if the response is ok
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert date strings to JavaScript Date objects
    const eventsWithDateObjects = response.data.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));

    return eventsWithDateObjects;
  } catch (error: any) {
    // Handle errors
    throw new Error(`An error occurred: ${error.message}`);
  }
};

//*************************************************profile Service************************************************************ */
export const createProfile = async () => {
  try {
    const response = await api.post(createprofile, {
      status: open,
    });
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const updateProfile = async (
  name: string,
  address: string,
  gender: string,
  institution: string,
  about: string
) => {
  try {
    const response = await api.patch(updateprofile, {
      name: name,
      address: address,
      gender: gender,
      institution: institution,
      about: about,
      status: open,
    });
    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get(getprofile);

    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
