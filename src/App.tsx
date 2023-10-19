import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./features/LandingPage";
import { HomePage } from "./features/HomePage/pages/HomePage";
import { SignIn } from "./features/SignIn";
import { SignUp } from "./features/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/SignIn" element={<SignUp />} />
        <Route path="/SignUp" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
