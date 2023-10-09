import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import Error from "../pages/ErrorPage/Error";
import PrivateRoute from "./PrivateRoute";


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
                path: '/about',
                element: <About></About>
                
            },

            {
                path:'/services/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader:()=>fetch(`/yoga.json`)
                
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