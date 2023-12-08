import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")!);
  return user ? children : navigate("/Home");
};

export default PrivateRoute;
