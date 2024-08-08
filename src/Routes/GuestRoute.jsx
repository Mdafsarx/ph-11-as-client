import { BiPhone } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";


const GuestRoute = () => {
    return (
        <>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/UserProfile'}><CgProfile />
            <span className="hidden md:block">User profile</span>
            </NavLink>
            <NavLink className={'flex items-center gap-1 font-bold'} to={'/dashboard/Contract'}><BiPhone />
            <span className="hidden md:block">Contract us</span>
            </NavLink>
        </>
    );
};

export default GuestRoute;