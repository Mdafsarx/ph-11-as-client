import { FaBlogger } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className=" bg-black text-base-100 p-4 md:p-8 flex flex-col md:flex-row justify-between items-center md:px-10 space-y-1.5">
                <aside>
                    <p className="text-2xl font-bold flex items-center gap-0 text-[#E21818]">a<span ><FaBlogger /></span>logger</p>
                </aside>

                <aside>
                    <p className="text-xs md:text-lg text-[#4CCD99] font-bold">Copyright © 2024 - All right reserved Providing reliable tech since 2020</p>
                </aside>

            </div>
        </div>
    );
};

export default Footer;