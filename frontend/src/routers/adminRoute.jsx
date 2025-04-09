import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children ? children : <Outlet />; // to the children of the parent root
};

export default AdminRoute;
