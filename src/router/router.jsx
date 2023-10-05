import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/place/:id',
                element : <PrivateRoute><Details></Details></PrivateRoute>,
                loader : () => fetch('/data.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default router;