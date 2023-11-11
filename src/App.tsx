import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { HomePage } from "./Pages/HomePage";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/Home' element={<HomePage />} />
                <Route path='/SignIn' element={<SignIn />} />
                <Route path='/SignUp' element={<SignUp/>} />
            </Routes>
            
            
        </div>
    )
}

export default App