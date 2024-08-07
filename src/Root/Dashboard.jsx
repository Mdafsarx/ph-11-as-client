/* eslint-disable react-hooks/rules-of-hooks */
import { BiHome, BiLogOut, BiSave } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa6";
import { GiTopHat } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import useAuth from "../hooks/useAuth";
import Spin from "../Private/Spin";
import GuestRoute from "../Routes/GuestRoute";
import AdminRoutes from "../Routes/AdminRoutes";
import toast from "react-hot-toast";

const Dashboard = () => {
    const { User, loading ,logout} = useAuth()


    if (loading) return <Spin />
    const { Data } = useUsers();


    // TODO: start here 
    const userInfo = Data?.find(data => data?.email === User?.email)
    const role = userInfo?.role;
    console.log(userInfo)



    return (
        <div className="relative overflow-x-hidden">
            <div className="flex md:gap-8">
                {/* dashboard */}
                <div className="bg-[#4CCD99E6] *:text-[#ffffffFA] w-auto min-h-screen">

                    <div className="px-3 md:px-6 mt-7">
                        <p className="text-2xl font-bold hidden md:flex items-center gap-0 text-[#E21818]">a<span ><FaBlogger /></span>logger</p>

                        <p className="text-2xl font-bold md:hidden text-[#E21818] -ml-1">
                        <span ><FaBlogger /></span></p>
                        
                        {/* d routes */}
                        <div className="space-y-3 mt-8">
                            {role==='guest'?<GuestRoute />:<AdminRoutes/>}
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* common for every user */}
                    <div className="px-3 md:px-6 space-y-4">

                        <NavLink className={'flex items-center gap-1 font-bold'} to={'/'}><BiHome /> 
                        <span className="hidden md:block" >Home</span>
                        </NavLink>
                        <NavLink className={'flex items-center gap-1 font-bold'} to={'/allBlogs'}><TfiWrite />
                        <span className="hidden md:block" >All blogs</span>
                        </NavLink>
                        <NavLink className={'flex items-center gap-1 font-bold'} to={'/featured'}><GiTopHat />
                        <span className="hidden md:block" >Featured</span>
                        </NavLink>
                        <NavLink className={'flex items-center gap-1 font-bold'} to={'/wishlist'}><BiSave />
                        <span className="hidden md:block" >Wishlist</span>
                        </NavLink>
                        <div className="absolute bottom-7 text-center">
                            <button className="flex items-center gap-1 font-bold" onClick={()=>{
                               logout().then(()=>toast.success('Logout successful'))
                            }}><BiLogOut />
                           <span className="hidden md:block" >Logout</span>
                            </button>
                        </div>

                    </div>




                </div>


                {/* outlet */}
                <div className="flex-1">
                    <Outlet />
                </div>


            </div>
        </div>
    );
};

export default Dashboard;