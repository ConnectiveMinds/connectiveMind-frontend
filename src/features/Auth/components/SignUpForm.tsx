import { useState } from 'react'
import { useNavigate} from 'react-router';

import validation from '../../../services/signUpValidation';
import { signUp } from '../../../services/signUpPageServices';
import isErrorEmpty from '../../../services/errorsEmpty';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

   const [formData, setFormData] = useState({
     userName: "",
     email: "",
     password: "",
     confirmPassword: "",
     phoneNo:0
   });
  
  //  const[reset,setVersion]=useState(0)
  
  
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo:""
  });


  const { userName, email, password,phoneNo } = formData;
  

   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     console.log(" no error in handleChage");
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
    //  handleValidation(e);
  };

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
      console.log("handleSubmit working")
     let isSignedUp = true;
       console.log(typeof(phoneNo));
       
     try {
       const response = await signUp(
         userName,email,password,Number(phoneNo)
       );
       
       
     } catch (error: any) {
       
       console.error("Error:", error);
       isSignedUp = false;
        }
       
     isSignedUp?navigate("/home"):console.log("signUp failed");

  };
  
  const handleValidation = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("erorororor");

    try {
      const response = await signUp(userName, email, password);
      console.log(response);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  const handleValidation = () => {
    console.log(" no error in handleValidation");
    const tempErrors = validation(formData);
    setErrors(tempErrors);
    console.log((errors));

    
    console.log(tempErrors);
    
    
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
          type="number"
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
