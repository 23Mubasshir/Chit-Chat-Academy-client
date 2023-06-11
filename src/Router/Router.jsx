import { createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/classes",
        element: <Classes />
      },
      {
        path: "/instructors",
        element: <Instructors />,
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "selected-Classes",
        element: <SelectedClasses />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  }
]);

export default router;
