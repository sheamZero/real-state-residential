import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/update",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    }
])

export default router;