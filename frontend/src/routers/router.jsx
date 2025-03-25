import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import AllJobs from "../pages/jobs/allJobs";
import SingleJobPage from "../pages/jobs/singleJobPage";
import App from "../App";
import Login from "../components/login";
import SignUp from "../components/signUp";
import Form from "../pages/jobs/form";

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
        element: <SingleJobPage />,
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
        element: <Form />,
      },
    ],
  },
]);

export default router;
