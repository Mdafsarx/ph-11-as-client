import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/addBlog/AddBlog";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import Error from "../Error/Error"
import AllBlogs from "../Pages/allBlogs/AllBlogs";
import WishList from "../Pages/WishList/WishList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<Error/>,
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
                element:<AllBlogs/>
            },
            {
                path:'/featured',
                element:<div>featured</div>
            },
            {
                path:'/wishlist',
                element:<WishList/>
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