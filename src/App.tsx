
import { Routes, Route } from "react-router";
import { HomePage } from "./features/HomePage/pages/HomePage";
import { LandingPage } from "./features/LandingPage";
import { Login } from "./features/SignIn";
import { SignUp } from "./features/SignUp";
import { BrowserRouter } from "react-router-dom";
import CreateGroup from "./features/CreateGroup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/CreateGroup' element={<CreateGroup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
