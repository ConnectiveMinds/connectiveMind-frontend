import React,{useState} from 'react'

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // async function signUp(){
  //   let item = { name, password, email }
    
  // }
  return (
    <div className="w-[100%] border-2 border-[purple] rounded-[20px] p-4">
      <h1 className="font-bold text-[2rem]">Sign Up</h1>
      <p>
        Have an account?{" "}
        <a href="/SignIn">
          <span className="text-[purple]">Sign In</span>
        </a>
      </p>
      <form action="" className="mt-10">
        <input
          className="w-[100%] block p-1 mt-2 rounded-md drop-shadow-lg"
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[100%] block p-1 mt-8  rounded-md drop-shadow-lg"
          type="text"
          placeholder="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[100%] block p-1 mt-8  rounded-md drop-shadow-lg"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[100%] block p-1 mt-8 rounded-md drop-shadow-lg"
          type="password"
          placeholder=" Confirm Password"
          required
          onChange={(e) => e.target.value===email? setEmail(e.target.value):console.log("password different")}
        />
        
        <button className="block p-1 mt-8 rounded-md drop-shadow-lg colored">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm
