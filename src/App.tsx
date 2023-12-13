import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login} from "./Pages/SignIn";
import { MyCalendar } from "./Components/calendar";
import { EventForm } from "./Components/eventform";
import Upload from "./Components/upload";
import { FilePage } from "./Pages/FilePage";
import CreateGroup from "./features/HomePage/components/CreateGroup";
import JoinRequest from "./features/Request/pages/JoinRequest";
import PrivateRoute from "./utils/privateRoute";
import TeamMembersPage from "./features/HomePage/components/teamSection";
import { LandingPage } from "./features/LandingPage/pages/LandingPage";
import { HomePage } from "./features/HomePage/pages/HomePage";
import { SignUp } from "./features/Auth/pages/SignUp";
import ProfilePage from "./features/Profile";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <LandingPage />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<ProfilePage />} />

          <Route path="/CreateGroup" element={<CreateGroup />} />
          <Route path="/join-requests" element={<JoinRequest />} />
          <Route path='/calendar' element={<MyCalendar/>} />
                <Route path="/eventform" element={<EventForm/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/file" element={<FilePage/>}/>
          <Route
            path="Home/team-members"
            element={<TeamMembersPage  _id={"1"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
  

export default App;
