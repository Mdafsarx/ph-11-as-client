import { BiPhone } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";


const GuestRoute = () => {
    return (
        <>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/UserProfile'}><CgProfile />User profile</NavLink>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/myCard'}><FiShoppingCart /> My blog</NavLink>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/Contract'}><BiPhone />Contract us</NavLink>
        </>
    );
};

export default GuestRoute;