import { FaBlogger } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const Nav = () => {

    const pages = <>
        <NavLink>Home</NavLink>
        <NavLink>Add Blog</NavLink>
        <NavLink>All blogs</NavLink>
        <NavLink>Featured Blogs</NavLink>
        <NavLink>Wishlist</NavLink>
    </>


    return (
        <div>
            <div className="navbar bg-[#4CCD99] my-4 rounded-full px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {pages}
                        </ul>
                    </div>
                    {/* login and logout */}
                    <div className="flex items-center gap-2 font-bold text-white ">
                        <NavLink className={'hover:text-blue-600 hover:underline'}>Login</NavLink>
                        <NavLink className={'hover:text-blue-600 hover:underline'}>Register</NavLink>
                    </div>
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