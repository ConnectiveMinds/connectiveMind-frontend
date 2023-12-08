import { crudchat } from "../utils/apiroutes";
import { api } from "./api.services";

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
