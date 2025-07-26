import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Page/Auth/Register";
import Login from "../Page/Auth/Login";
import Home from "../Page/Home/Home";
import Dashboard from "../Page/Dashboard/Dashboard";

const router = createBrowserRouter([
    {path:"/",
        Component:MainLayout,
        children:[
            {
                index:true,
                path:"/",
                Component:Home
            },
            {
                path:"/dashBoard",
                Component:Dashboard

            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/register",
                Component: Register

            },
            {
                path: "/auth/login",
                Component: Login
            }
        ]
    },
])
export default router