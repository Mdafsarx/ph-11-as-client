import { LuClock3, LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const Information = () => {
    return (
        <div className="flex flex-col md:flex-row text-white">
            <div className="w-full h-40 bg-[#4CCD99] p-10 space-y-1">
                <p><LuClock3 className="text-4xl" /></p>
                <p className="text-lg">Mon - Sat: 8AM - 9PM</p>
                <p className="text-lg">Sunday: 10AM - 8PM</p>
            </div>
            <div className="w-full h-40 bg-[#A1DD70E6] p-10 space-y-1">
                <p><MdOutlineLocationOn className="text-4xl" /></p>
                <p className="text-lg">Uposhohor</p>
                <p className="text-lg">Sylhet, Bangladesh</p>
            </div>
            <div className="w-full h-40 bg-[#4CCD9980] p-10 space-y-1">
                <p><LuPhone className="text-4xl" /></p>
                <p className="text-lg">+8801722877040</p>
                <p className="text-lg">ablogger@gmail.com</p>
            </div>
        </div>
    );
};

export default Information;