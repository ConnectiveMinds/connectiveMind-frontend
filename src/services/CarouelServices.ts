import axios from "axios";
import {getallgroups} from "../utils/apiroutes";

export const getGroups = async () => {
    try {
        const response = await axios
          .get(getallgroups)
          .then(function (response) {
            console.log(response.data);
          });
       
        return response;
    }
    
    catch (error: any) {
        throw new Error(`Error: ${error.message}`);
    }
   
}