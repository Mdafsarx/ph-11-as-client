import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/addBlog/AddBlog";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<div>error found</div>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addBlog',
                element:<AddBlog/>
            },
            {
                path:'/allBlogs',
                element:<div>all blogs</div>
            },
            {
                path:'/featured',
                element:<div>featured</div>
            },
            {
                path:'/wishlist',
                element:<div>wishlist</div>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    },
]);


export default router