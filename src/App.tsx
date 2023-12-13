import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MyCalendar } from "./Components/calendar";
import { EventForm } from "./Components/eventform";
import Upload from "./Components/upload";
import { FilePage } from "./Pages/FilePage";
import JoinRequest from "./features/Request/pages/JoinRequest";
import PrivateRoute from "./utils/privateRoute";
import { LandingPage } from "./features/LandingPage/pages/LandingPage";
import { HomePage } from "./features/HomePage/pages/HomePage";
import { SignUp } from "./features/Auth/pages/SignUp";
import CreateGroup from "./features/CreateGroup/pages/CreateGroup";
import { Login } from "./features/Auth/pages/SignIn";

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
          <Route path="/CreateGroup" element={<CreateGroup />} />
          <Route path="/join-requests" element={<JoinRequest />} />
          <Route path="/calendar" element={<MyCalendar />} />
          <Route path="/eventform" element={<EventForm />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/file" element={<FilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
