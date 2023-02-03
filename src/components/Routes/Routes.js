import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
           
        ]
    }
])