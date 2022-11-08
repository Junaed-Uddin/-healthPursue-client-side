import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AllServices/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices/AllServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'home',
                element: <Home></Home>,
            },
            {
                path: 'allServices',
                element: <AllServices></AllServices>,
            },
            {
                path: 'MyReview',
                element: <MyReviews></MyReviews>
            },
            {
                path: 'AddService',
                element: <AddService></AddService>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]

    }
])