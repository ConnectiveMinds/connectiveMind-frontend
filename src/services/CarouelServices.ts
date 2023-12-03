import axios from "axios";
import {group } from "../utils/apiroutes";

export const getGroups = async () => {
    try {
        const response = await axios.get(group);
        console.log(response.data);
        return response.data;
    }
    
    catch (error: any) {
        throw new error(`Error: ${error.message}`);
    }
   
}