import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import AllJobs from "../pages/jobs/allJobs";
import SingleJobPage from "../pages/jobs/singleJobPage";
import App from "../App";
import Login from "../components/login";
import SignUp from "../components/signUp";
import Form from "../pages/jobs/form";
import AdminLogin from "../components/adminLogin";
import PrivateRoute from "./privateRoute";
import DashBoardLayout from "../pages/dashboard/dashboardLayout";
import Dashboard from "../pages/dashboard/dashboard";
import AdminRoute from "./adminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/job/:id",
        // to protect the singleJobPage we have to wrap it with privateRoute element
        element: (
          <PrivateRoute>
            <SingleJobPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/log-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/form",

        element: (
          <PrivateRoute>
            <Form />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashBoardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",

        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      // {
      //   path: "add-new-job",
      //   element: <AddJob />,
      // },
      // {
      //   path: "edit-job/:id",
      //   element: <UpdateBook />,
      // },
      // {
      //   path: "manage-jobs",
      //   element: <ManageBooks />,
      // },
    ],
  },
]);

export default router;
