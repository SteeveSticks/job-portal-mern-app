import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

// for protecting the checkout route
const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // form authContext

  if (user) {
    return children;
  }

  // naviagate a react-router-dom property that can navigate the user back to any page but here login
  return <Navigate to="/log-in" replace />;
};

export default PrivateRoute;
