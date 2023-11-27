import axios from 'axios';
import { creategroup, ownerId, AuthToken } from '../utils/apiroutes';



export const createGroup = async (teamName: string, projectDescription: string, skillsRequired: string) => {
  try {
    const response = await axios.post(
      creategroup,
      {
        ownerId: ownerId,
        title: teamName,
        description: projectDescription,
        skills: [skillsRequired],
        status: 'open',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+AuthToken,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};

