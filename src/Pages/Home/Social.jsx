import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./css.css"
import { MdEmail } from "react-icons/md";

const Social = () => {
    return (
        <div className="gap-0">

            <h1 className="uppercase text-[#4CCD99] text-2xl md:text-4xl font-black font-mono text-shadow-3d text-center pt-8 md:pt-14 animate__animated animate__swing animate__delay-4s animate__infinite animate__slow">Connect with us</h1>

            <div className="flex pt-9 md:pt-12  text-white">

                <a className="w-full cursor-pointer flex items-center justify-between md:px-14 md:h-40 bg-[#F70000] p-3 md:p-10 space-y-1">
                    <h1 className="md:text-3xl hidden md:block">Youtube</h1>
                    <p><FaYoutube className="text-2xl md:text-6xl" /></p>
                </a>


                <a className="w-full cursor-pointer flex items-center justify-between md:px-14 md:h-40 bg-[#0065F7] p-3 md:p-10 space-y-1">
                    <h1 className="md:text-3xl hidden md:block">Facebook</h1>
                    <p><FaFacebook className="text-2xl md:text-6xl" /></p>
                </a>

                <a className="w-full cursor-pointer flex items-center justify-between md:px-14 md:h-40 bg-[#0A66C2] p-3 md:p-10 space-y-1">
                    <h1 className="text-3xl hidden md:block">Linkedin</h1>
                    <p><FaLinkedin className="text-2xl md:text-6xl" /></p>
                </a>


                <a className="w-full cursor-pointer flex items-center justify-between md:px-14 md:h-40 bg-[#000000] p-3 md:p-10 space-y-1">
                    <h1 className="text-3xl hidden md:block">Twitter</h1>
                    <p><FaSquareXTwitter className="text-2xl md:text-6xl" /></p>
                </a>

            </div>

            <div className="w-full p-3  bg-[#4CCD99] ">
                <h1 className="flex items-center justify-center text-xl md:text-3xl text-white font-thin gap-2">Shoot us a mail  <MdEmail className="text-3xl mt-1"/></h1>
            </div>

        </div>
    );
};

export default Social;