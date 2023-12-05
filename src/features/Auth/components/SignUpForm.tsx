import { useState } from "react";
import { signUp } from "../../../services/signUpPageServices";
import validation from "../../../services/signUpValidation";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, email, password } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(" no error in handleChage");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setErrors(validation(formData));
    // handleSubmit(e);
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
      <form className="mt-10" onSubmit={handleSubmit}>
        <input
          className="w-[100%] block p-1 mt-2 rounded-md drop-shadow-lg"
          type="email"
          name="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-[red]">{errors.email}</p>}

        <input
          className="w-[100%] block p-1 mt-8  rounded-md drop-shadow-lg"
          type="text"
          placeholder="username"
          name="userName"
          required
          value={formData.userName}
          onChange={handleChange}
        />
        {errors.userName && <p className="text-[red]">{errors.userName}</p>}

        <input
          className="w-[100%] block p-1 mt-8  rounded-md drop-shadow-lg"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-[red]">{errors.password}</p>}

        <input
          className="w-[100%] block p-1 mt-8 rounded-md drop-shadow-lg"
          type="password"
          placeholder=" Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <p className="text-[red]">{errors.confirmPassword}</p>
        )}

        <button
          className="block p-1 mt-8 rounded-md drop-shadow-lg colored"
          onClick={handleValidation}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
