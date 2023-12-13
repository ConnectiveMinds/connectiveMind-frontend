import { useState, useEffect, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../../../app/hook";
import { useLoginUserMutation } from "../../../services/authApi";
import { setUser } from "../components/authSlice";
import { TextField } from "../../../Components/textfield";
import OTPDialog from "../../../Components/TextField/OTPfield";



const Login = () => {
  const initialState: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

  const [FormValue, setFormValue] = useState(initialState);
  const { email, password } = FormValue;
  const [isForgetPasswordOpen, setForgetPasswordOpen] = useState(false); // State to track the OTP dialog

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginerror,
    },
  ] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setFormValue({ ...FormValue, [e.target.name]: e.target.value });
  };

  const handlelogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      await loginUser({ email, password });
    } else {
      toast.error("Please fill in all the inputs");
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("User Login successfully");
      dispatch(setUser({ user: loginData.data }));
      navigate("/home");
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isLoginError) {
      toast.error((loginerror as any).data.message);
    }
  }, [isLoginError]);

  const handleForgetPasswordClick = () => {
    console.log("Forget password clicked");
    setForgetPasswordOpen(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto max-h-screen my-4 ">
      <div className="flex justify-center md:justify-start ">
        <img src="src\Data\Connective_logo.png" alt="Logo" />
      </div>
      <div className="flex justify-around ">
        <div>
          <div className="md:my-16 my-10">
            <div className="font-poppins mb-12 ">
              <p className="font-bold text-gray-900 sm:text-4xl tracking-normal text-2xl">
                Welcome Back,
              </p>
              <p className="font-bold text-purple-700 sm:text-4xl tracking-normal text-2xl">
                Login
              </p>
            </div>
            <TextField
              param={email}
              type="email"
              name="email"
              placeholder="Email"
              aria_label="Email"
              handle={handleChange}
            />
            <TextField
              param={password}
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              handle={handleChange}
            />

            <button
              className="my-2 text-xs text-purple-700 font-semibold bg-transparent border-none cursor-pointer"
              onClick={handleForgetPasswordClick}
            >
              Forget password?
            </button>
            {isForgetPasswordOpen && <OTPDialog onClose={() => setForgetPasswordOpen(false)} />}

            <button
              type="button"
              className="my-4 w-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 md:font-medium rounded-xl md:text-xl md:px-12 md:py-2 text-center mr-2 mb-2 px-5 py-1 font-normal"
              onClick={handlelogin}
            >
              Login
            </button>
            <div className="my-2 flex text-sm text-purple-700 tracking-wide">
              <p className="font-normal">Don’t have and account?</p>
              <p className="font-bold">Register</p>
            </div>
          </div>
        </div>

        <div className="hidden  md:inline-block h-[540px] min-h-[1em] w-px self-stretch bg-purple-700 opacity-100 "></div>

        <div className="hidden md:flex">
          <img src="src\Data\login_teams.png" alt="Team" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export { Login };
