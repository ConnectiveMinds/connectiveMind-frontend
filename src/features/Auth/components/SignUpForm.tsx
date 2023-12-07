import { useState } from "react";
import { useNavigate } from "react-router";

import validation from "../../../services/signUpValidation";
import { signUp } from "../../../services/signUpPageServices";
import isErrorEmpty from "../../../services/errorsEmpty";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const registeredPattern =/600/;

  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  });


//validation errors of input fields
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
  });

  const { userName, email, password, phoneNo } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
  };

  //invoked when form is submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
    let isSignedUp = true;//to check if the user signUp is successful
   
    try {
    const response = await signUp(userName, email, password, Number(phoneNo));
      console.log(response.Data);
      
    } catch (error: any) {
      console.error(error);
   //checks if user is already registered 
      if (registeredPattern.test(error)) {
        console.log("error 600");
        setIsRegistered(true);
      }
//if any error in signing up isSignedUp becomes false
      isSignedUp = false;
    }

    isSignedUp ? navigate("/home") : console.log("signUp failed");
  };

  //validation check of form input fields
  const handleValidation = (e: React.FormEvent) => {
    e.preventDefault();
   
    const tempErrors = validation(formData);
    setErrors(tempErrors);

    //if no validation errors submit the form
    if (isErrorEmpty(tempErrors)) { 
      handleSubmit(e);
    }
  };

  return (
    <div className=" w-[100%] max-w-lg mx-auto mt-8 p-8 bg-white rounded-3xl shadow-lg border-2 border-[purple] ">
      <h1 className="font-bold text-[2rem]">Sign Up</h1>

      <p>
        Have an account?{" "}
        <a href="/login">
          <span className="text-[purple]">Sign In</span>
        </a>
      </p>

      <form className="mt-10">
        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          type="email"
          name="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-[red] text-[0.75rem]">{errors.email}</p>
        )}

        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          type="text"
          placeholder="username"
          name="userName"
          required
          value={formData.userName}
          onChange={handleChange}
        />
        {errors.userName && (
          <p className="text-[red] text-[0.75rem]">{errors.userName}</p>
        )}

        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          
          placeholder="phoneNo"
          name="phoneNo"
          required
          value={formData.phoneNo}
          onChange={handleChange}
          onSubmit={handleValidation}
        />
        {errors.phoneNo && (
          <p className="text-[red] text-[0.75rem]">{errors.phoneNo}</p>
        )}

        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          onSubmit={handleValidation}
        />
        {errors.password && (
          <p className="text-[red] text-[0.75rem]">{errors.password}</p>
        )}

        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          type="password"
          placeholder=" Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <p className="text-[red] text-[0.75rem]">{errors.confirmPassword}</p>
        )}

        {isRegistered && (
          <p className=" mt-4 text-[red] text-[0.75rem]">{"email id or phone number is already registered"}</p>
        )}

        <button
          type="submit"
          onClick={handleValidation}
          className="block p-1 mt-8 rounded-md drop-shadow-lg colored"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
