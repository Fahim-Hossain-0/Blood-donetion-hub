import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Page/Auth/Register";
import Login from "../Page/Auth/Login";
import Home from "../Page/Home/Home";
// import Dashboard from "../Page/Dashboard/Dashboard";
import DashboardLayout from "../Page/Dashboard/DashboardLayout";
import Profile from "../Components/Profile";
import DonorWelcome from "../Page/Dashboard/DonorWelcome";
import CreateDonationRequest from "../Components/CreateDonationRequest";
import DonorDashboard from "../Page/Dashboard/DonorDashboard";
import DonationRequestDetails from "../Page/Dashboard/DonationRequestDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        // path: "/dashBoard",
        // Component: Dashboard
      },
    ],
  },
  {
    path: "/dashboardLayout",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "true",
        Component: DonorWelcome,
      },
      {
        path: "create-donation-request",
        element: <CreateDonationRequest />,
      },
      {
        path: "dashBoard",
        Component: DonorDashboard,
      },
      {
        path: "view-donation/:id",
        element: <DonationRequestDetails />,
      },

      // { path: "profile", element: <ProfilePage /> },
      // { path: "another", element: <AnotherComponent /> },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
]);
export default router;
