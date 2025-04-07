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
    path: "/employer",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
  },
]);

export default router;
