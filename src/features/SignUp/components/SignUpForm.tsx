import {useState} from 'react'
import { signUp } from '../../../services/signUpPageServices';

const SignUpForm: React.FC = () => {
   const [formData, setFormData] = useState({
     userName: "",
     email: "",
     password: "",
   });

   const { userName, email, password } = formData;

   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();

     try {
       const response = await signUp(
         userName,email,password
       );
       console.log(response);
     } catch (error: any) {
       console.error("Error:", error.message);
     }
   };

  return (
    <div className="w-[100%] border-2 border-[purple] rounded-[20px] p-4">
      <h1 className="font-bold text-[2rem]">Sign Up</h1>
      <p>
        Have an account?{" "}
        <a href="/login">
          <span className="text-[purple]">Sign In</span>
        </a>
      </p>
      <form action="" className="mt-10" onSubmit={handleSubmit}>
        <input
          className="w-[100%] block p-1 mt-2 rounded-md drop-shadow-lg"
          type="email"
          name='email'
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-[100%] block p-1 mt-8  rounded-md drop-shadow-lg"
          type="text"
          placeholder="username"
          name='userName'
          required
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          className="w-[100%] block p-1 mt-8  rounded-md drop-shadow-lg"
          type="password"
          placeholder="Password"
          name='password'
          required
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className="w-[100%] block p-1 mt-8 rounded-md drop-shadow-lg"
          type="password"
          placeholder=" Confirm Password"
          required
        />

        <button
          
          className="block p-1 mt-8 rounded-md drop-shadow-lg colored"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}                                             

export default SignUpForm
