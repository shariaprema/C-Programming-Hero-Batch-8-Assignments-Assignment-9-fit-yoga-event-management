import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
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