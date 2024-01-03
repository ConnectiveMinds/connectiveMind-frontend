import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { MyCalendar } from "./Components/calendar";

// import Upload from "./Components/upload";
import { FilePage } from "./Pages/FilePage";

import JoinRequest from "./features/Request/pages/JoinRequest";
import PrivateRoute from "./utils/privateRoute";
import { LandingPage } from "./features/LandingPage/pages/LandingPage";
import { HomePage } from "./features/HomePage/pages/HomePage";
import { SignUp } from "./features/Auth/pages/SignUp";
import ProfilePage from "./features/Profile";

import CreateGroup from "./features/CreateGroup/pages/CreateGroup";
import { Login } from "./features/Auth/pages/SignIn";
import { SmallCalendar } from "./Components/smallCalendar";

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
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Calendar" element={<SmallCalendar />} />
          <Route path="/CreateGroup" element={<CreateGroup />} />
          <Route path="/join-requests" element={<JoinRequest />} />
          {/* <Route path="/calendar" element={<MyCalendar />} /> */}
          {/* <Route path="/eventform" element={<EventForm />} /> */}
          {/* <Route path="/upload" element={<Upload />} /> */}
          <Route
            path="/file"
            element={<FilePage _id="657a72afaabe83c870396460" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
