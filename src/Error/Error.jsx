import { Link } from "react-router-dom";
import { MdWifiTetheringErrorRounded } from "react-icons/md";


const Error = () => {
    return (
        <div>
            <section className="flex items-center min-h-screen  bg-[url('/2.gif')] bg-no-repeat bg-cover">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto  space-y-4 text-center sm:max-w-md bg-[#00000080] p-4 rounded-2xl">
                    <MdWifiTetheringErrorRounded  className="text-9xl text-white"/>
                    <h1 className="text-4xl uppercase text-red-600">Page not found</h1>
                    <Link  className="px-8 py-3 font-bold rounded btn bg-white text-black uppercase" to={'/'}>home</Link>
                </div>
            </section>
        </div>
    );
};

export default Error;