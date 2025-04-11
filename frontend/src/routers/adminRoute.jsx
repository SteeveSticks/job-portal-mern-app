import { Navigate, Outlet, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Token has exp field
import { useEffect, useState } from "react";

const AdminRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsValid(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        // Token expired
        localStorage.removeItem("token");
        setIsValid(false);
      }
    } catch (error) {
      // Invalid token
      localStorage.removeItem("token");
      setIsValid(false);
    }
  }, [location]);

  // If token does not exits, redirect to the login page
  if (!isValid) {
    return <Navigate to="/admin" replace />;
  }

  return children ? children : <Outlet />; // to the children of the parent root
};

export default AdminRoute;
