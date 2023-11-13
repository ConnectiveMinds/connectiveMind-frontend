import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { HomePage } from "./Pages/HomePage";
import { Login} from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { MyCalendar } from "./Components/calendar";
import { EventForm } from "./Components/eventform";


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/Home' element={<HomePage />} />
                <Route path='/SignIn' element={<SignUp />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/calendar' element={<MyCalendar/>} />
                <Route path="/eventform" element={<EventForm/>}/>
            </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

export default App