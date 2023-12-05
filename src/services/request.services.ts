import { incomingRequest, sentRequest } from "../utils/apiroutes";
import { api } from "./apiServices";

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
