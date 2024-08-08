import { BiHomeAlt2 } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
// import { FaUserSecret } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminRoutes = () => {
    return (
        <>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/adminHome'}><BiHomeAlt2 />
            <span className="hidden md:block">Admin Home</span>
            </NavLink>
            {/* <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/allUsers'}><FaUserSecret />All users</NavLink> */}
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/addBlog'}><CgAdd />
            <span className="hidden md:block">Add blog</span>
            </NavLink>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/myCard'}><FiShoppingCart /> 
            <span className="hidden md:block">My blog</span>
            </NavLink>
        </>
    );
};

export default AdminRoutes;