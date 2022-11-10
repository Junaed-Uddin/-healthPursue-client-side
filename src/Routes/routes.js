import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AllServices/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices/AllServices";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import Login from "../Pages/Login/Login";
import EditReviews from "../Pages/MyReviews/EditReviews/EditReviews";
import MyReviews from "../Pages/MyReviews/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: 'MyReview',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/editReviews/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/user-reviews/${params.id}`),
                element: <PrivateRoute><EditReviews></EditReviews></PrivateRoute>
            },
            {
                path: 'AddService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
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