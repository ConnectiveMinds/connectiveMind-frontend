import { Routes, Route } from "react-router";
import { HomePage } from "./features/HomePage/pages/HomePage";

import { Login } from "./features/Auth/pages/SignIn";

import { BrowserRouter } from "react-router-dom";
import CreateGroup from "./features/HomePage/components/CreateGroup";
import JoinRequest from "./features/Request/pages/JoinRequest";
import { LandingPage } from "./features/LandingPage/pages/LandingPage";
import { SignUp } from "./features/Auth/pages/SignUp";

import PrivateRoute from "./utils/privateRoute";
import TeamMembersPage from "./features/HomePage/components/teamSection";

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
          <Route
            path="Home/team-members"
            element={<TeamMembersPage groupID={"1"} ownerID={"1"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
