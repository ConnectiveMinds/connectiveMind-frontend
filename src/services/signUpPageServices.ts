import axios from "axios";
import { AuthToken, userSignUp } from "../utils/apiroutes";

export const signUp = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(
      userSignUp,
      {
        name: name,
        email: email,
        password: password,
        status: "open",
        gender: "M",
        phoneNo: 988767676867,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthToken,
        },
      }
    );
    console.log(response.data);

    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};
