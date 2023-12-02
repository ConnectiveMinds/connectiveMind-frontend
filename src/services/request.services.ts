import axios from "axios";
import { AuthToken, incomingRequest } from "../utils/apiroutes";

export const getIncomingRequest = async () => {
  try {
    const response = await axios.get(incomingRequest, {
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
