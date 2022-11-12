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
import Main from "../../Layout/Main";

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
                element:<Appointment></Appointment>
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
    }
])