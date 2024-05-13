import { FaBlogger } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const Nav = () => {

    const { User , logout , loading } = useAuth();
     console.log(User)

    const pages = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : ''}>Home</NavLink>

        <NavLink to={'/addBlog'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : ''}>Add Blog</NavLink>

        <NavLink to={'/allBlogs'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : ''}>All blogs</NavLink>

        <NavLink to={'/featured'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : ''}>Featured Blogs</NavLink>

        <NavLink to={'/wishlist'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : ''}>Wishlist</NavLink>
    </>


    return (
        <div className="bg-[#4CCD99]">
            <div className="navbar  max-w-7xl mx-auto" data-aos="fade-right"  data-aos-duration="3000" data-aos-delay="300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 space-y-2 font-bold bg-white border shadow-xl rounded-box w-32">
                            {pages}
                        </ul>
                    </div>
                    {/* login and logout */}

                    {   loading ? <span className="loading loading-bars loading-md "></span> : 
                        User
                            ?
                            <div className="flex items-center gap-2 p-2">
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-white">
                                        <img src={User?.photoURL} />
                                    </div>
                                </div>
                                <button className="font-bold text-white hover:text-blue-600 hover:underline" onClick={()=>{
                                    logout()
                                    .then(()=>toast.success('Logout successful'))
                                    .catch(error=>toast.error(error.message))
                                }}>Logout</button>
                            </div>
                            :
                            <div className="flex items-center gap-2 font-bold text-white ">
                                <NavLink to={'/login'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : 'hover:text-blue-600 hover:underline'}>Login</NavLink>

                                <NavLink to={'/register'} className={({ isActive }) => isActive ? 'underline md:no-underline text-red-600 md:btn  md:btn-sm md:btn-outline md:border-white md:border-2 ' : 'hover:text-blue-600 hover:underline'}>Register</NavLink>
                            </div>
                    }





                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex items-center gap-5 *:font-bold text-white">
                        {pages}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="text-2xl font-bold flex items-center gap-0 text-[#E21818]">a<span ><FaBlogger /></span>logger</p>
                </div>
            </div>
        </div>
    );
};

export default Nav;