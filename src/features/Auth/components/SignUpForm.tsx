import { useState } from "react";
import { useNavigate } from "react-router";

import validation from "../../../utils/signUpValidation";

import isErrorEmpty from "../../../utils/errorsEmpty";
import { sendOTP, signUp, verifyOTP } from "../../../services/api.services";
import { ToastContainer, toast } from "react-toastify";
import OTPDialog from "./OTPfield";

interface FormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNo: string;
  skills: string[];
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [showFrogotpassword, setShowFrogotpassword] = useState(false); // State to track the OTP dialog

  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    skills: [],
  });

  //validation errors of input fields
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    skills: "",
  });

  const { userName, email, password, phoneNo, skills } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "skills") {
      const skillsArray = value.split(",").map((skill) => skill.trim());
      setFormData({ ...formData, [name]: skillsArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  //invoked when form is submitted
  const handleSignUpButton = async () => {
    try {
      await sendOTP(email)
        .then((data) => {
          if (data) {
            setShowFrogotpassword(true);
          }
        })
        .catch(() => {
          toast.error("Failed to send OTP");
        });
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleVerifyOTP = async (otp: string) => {
    try {
      await verifyOTP(email, Number(otp))
        .then((data) => {
          if (data) {
            setShowFrogotpassword(false);
            handleSubmit();
          }
        })
        .catch(() => {
          toast.error("Invalid OTP");
        });
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    try {
      await signUp(userName, email, password, Number(phoneNo), skills)
        .then((data) => {
          if (data) {
            navigate("/login");
          }
        })
        .catch(() => {
          toast.error("Email/Phone Already registered");
        });
    } catch (error: any) {
      //checks if user is already registered
      //if any error in signing up isSignedUp becomes false
    }
  };

  //validation check of form input fields
  const handleValidation = (e: React.FormEvent) => {
    e.preventDefault();

    const tempErrors = validation(formData);
    console.log(formData);

    setErrors(tempErrors);

    //if no validation errors submit the form
    if (isErrorEmpty(tempErrors)) {
      handleSignUpButton();
    }
  };

  return (
    <div className=" w-[100%] max-w-md mx-auto mt-4 md:mt-4 px-16">
      <h1 className="font-bold text-purple-700 text-4xl tracking-normal">
        Sign Up
      </h1>

      <p className="mt-2">
        Have an account?{" "}
        <a href="/login">
          <span className="text-[purple] text-sm">Sign In</span>
        </a>
      </p>

      <form className="mt-4">
        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          type="email"
          name="email"
          placeholder="Email"
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
          placeholder="Username"
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
          placeholder="Phone"
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

        <input
          className="w-full mt-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
          placeholder="Your skills"
          name="skills"
          required
          value={formData.skills}
          onChange={handleChange}
          onSubmit={handleValidation}
        />
        {errors.skills && (
          <p className="text-[red] text-[0.75rem]">{errors.skills}</p>
        )}

        <button
          type="submit"
          onClick={handleValidation}
          className="my-6 w-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-xl text-lg px-8 py-2 text-center mr-2 mb-2 "
        >
          Sign Up
        </button>
      </form>
      {showFrogotpassword && (
        <div className="overlay">
          <OTPDialog
            onSubmit={(otp) => handleVerifyOTP(otp)}
            resendOTP={() => handleSignUpButton()}
            onClose={() => setShowFrogotpassword(false)}
          />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
