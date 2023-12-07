import { crudchat } from "../utils/apiroutes";
import { api } from "./apiServices";

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
