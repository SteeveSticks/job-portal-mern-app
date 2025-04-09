import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token does not exits, redirect to the login page
  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children ? children : <Outlet />; // to the children of the parent root
};

export default AdminRoute;
