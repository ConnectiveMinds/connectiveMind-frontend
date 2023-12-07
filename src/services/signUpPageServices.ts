import axios from "axios";
import { AuthToken, userSignUp } from "../utils/apiroutes";

export const signUp = async (
  name: string,
  email: string,
  password: string,
  phoneNo: number
) => {
  try {
    console.log("hello");

    const response = await axios.post(
      userSignUp,
      {
        name: name,
        email: email,
        password: password,
        status: "open",
        gender: "M",
        phoneNo: phoneNo,
        address: "afnfsnn",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthToken,
        },
      }
    );
    console.log("hello2");

    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.log("inside catch");

    throw new Error(`Error: ${error.message}`);
  }
};
