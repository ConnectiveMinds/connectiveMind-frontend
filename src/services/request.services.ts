import {
  acceptrequest,
  declinerequest,
  incomingRequest,
  sentRequest,
} from "../utils/apiroutes";
import { api } from "./api.services";

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
