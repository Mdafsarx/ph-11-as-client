import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/addBlog/AddBlog";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import Error from "../Error/Error"
import AllBlogs from "../Pages/allBlogs/AllBlogs";
import WishList from "../Pages/WishList/WishList";
import Featured from "../Pages/Featured/Featured";
import Private from "../Private/Private";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";
import Dashboard from "../Root/Dashboard";
import MyCard from "../Pages/Dashboard/MyCard";
import UserProfile from "../Pages/Dashboard/UserProfile";
import ContractUs from "../Pages/Dashboard/ContractUs";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AddBlogs from "../Pages/Dashboard/Admin/AdminBlogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addBlog',
                element: <Private><AddBlog /></Private>
            },
            {
                path: '/allBlogs',
                element: <AllBlogs />
            },
            {
                path: '/featured',
                element: <Featured />
            },
            {
                path: '/wishlist',
                element: <Private><WishList /></Private>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/:id',
                element: <Private><Details /></Private>
            },
            {
                path: '/update/:id',
                element: <Private><Update /></Private>
            },
        ]
    },



    // user dashboard
    {
        path: 'dashboard',
        element: <Private><Dashboard /></Private>,
        children: [
            // gust route 
            {
                path: 'myCard',
                element: <MyCard />
            },
            {
                path: 'UserProfile',
                element: <UserProfile />
            },
            {
                path: 'Contract',
                element: <ContractUs />
            },




            // admin route 
            {
                path: 'allUsers',
                element: <AllUsers />
            },
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'addBlog',
                element: <AddBlogs />
            },




        ]
    }
]);


export default router