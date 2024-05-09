import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<div>error found</div>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
]);


export default router