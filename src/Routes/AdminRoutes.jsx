import { BiHomeAlt2 } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
// import { FaUserSecret } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminRoutes = () => {
    return (
        <>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/adminHome'}><BiHomeAlt2 />Admin Home</NavLink>
            {/* <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/allUsers'}><FaUserSecret />All users</NavLink> */}
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/addBlog'}><CgAdd />Add blog</NavLink>
        </>
    );
};

export default AdminRoutes;