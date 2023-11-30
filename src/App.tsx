import { Routes, Route } from "react-router";
import { HomePage } from "./features/HomePage/pages/HomePage";

import { Login } from "./features/SignIn";

import { BrowserRouter } from "react-router-dom";
import CreateGroup from "./features/CreateGroup";
import JoinRequest from "./features/JoinRequest";
import { LandingPage } from "./features/LandingPage/pages/LandingPage";
import { SignUp } from "./features/SignUp/pages/SignUp";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CreateGroup" element={<CreateGroup />} />
          <Route path="/join-requests" element={<JoinRequest />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
