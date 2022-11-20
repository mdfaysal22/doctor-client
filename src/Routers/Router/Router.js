import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/Pages/About/About";
import Appointment from "../../Components/Pages/Appointment/Appointment";
import Contact from "../../Components/Pages/Contact/Contact";
import Home from "../../Components/Pages/Home/Home";
import Reviews from "../../Components/Pages/Reviews/Reviews";
import Login from "../../Components/User/Login/Login";
import Signup from "../../Components/User/Signup/Signup";
import Update from "../../Components/User/Update/Update";
import User from "../../Components/User/User/User";
import MyAppo from "../../Dashboard/MyAppo/MyAppo";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/appointment",
                element:<PrivateRouter><Appointment></Appointment></PrivateRouter>
            },
            {
                path:'reviews',
                element:<Reviews></Reviews>
            },
            {
                path:"/contact",
                element:<Contact></Contact>        
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/user',
                element:<User></User>
            },
            {
                path:'/update',
                element:<Update></Update>
            }



        ]
    },
    {
        path:'/admin',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'/admin',
                element:<MyAppo></MyAppo>
            }
        ]

    }
])