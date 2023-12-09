import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { HomePage } from "./Pages/HomePage";
import { Login} from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { MyCalendar } from "./Components/calendar";
import { EventForm } from "./Components/eventform";
import Upload from "./Components/upload";
import { FilePage } from "./Pages/FilePage";
// import DropZoneComponent from "./Components/DropZoneComponent";



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
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/file" element={<FilePage/>}/>
                

            </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

export default App