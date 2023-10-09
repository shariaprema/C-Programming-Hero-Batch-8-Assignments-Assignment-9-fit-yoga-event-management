import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import Error from "../pages/ErrorPage/Error";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch(`/yoga.json`)
                
            },


            {
                path:'/services/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader:()=>fetch(`/yoga.json`)
                
            },
            
            {
                path: '/aboutUs',
                element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path: '/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;