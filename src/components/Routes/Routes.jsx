import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import About from "../About/About";
import Career from "../Career/Career";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'About',
                element:<About></About>
            },
            {
                path:'Career',
                element:<Career></Career>
            },
            {
                path:'Login',
                element:<Login></Login>
            },
            {
                path:'Register',
                element:<Register></Register>
            }
        ]
    }
   
])

export default router