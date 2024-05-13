import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import Swal from 'sweetalert2'





const Contract = () => {

    function handleSubmit(e){
      e.preventDefault();
      const name=e.target.name.value;
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Thankyou for contract us ${name}`,
        showConfirmButton: false,
        timer: 2000
      });
      e.target.reset()
    }

    return (
        <div className="my-10">

            <div className="text-center">
                <h1 className="text-3xl font-bold ">Contact With Us</h1>
                <p>Got questions or feedback? Reach out <br /> to us! Contact us below for prompt assistance.</p>
            </div>

            <div>

                <div className="grid max-w-screen-xl grid-cols-1 gap-4  py-16 mx-auto rounded-lg md:grid-cols-2 px-5 md:px-12 lg:px-16 xl:px-32">

                    <div className="grid md:grid-cols-2 " data-aos="fade-right"  data-aos-duration="3000" data-aos-delay="300">
                        {/* 1 */}
                        <div className="bg-[#F3F3F3] flex flex-row justify-center items-center md:border-2 border-black md:border-t-0 md:border-l-0">

                            <div className="flex flex-col items-center p-4 lg:p-0">
                                <IoLocationSharp className="text-3xl md:text-5xl" />
                                <h1 className="text-xl font-bold text-[#4CCD99]">Address</h1>
                                <p className="text-balance text-center">Block: j Uposhohar <br /> Sylhet,Bangladesh</p>
                            </div>

                        </div>

                        {/* 2 */}
                        <div className="bg-[#F3F3F3] flex justify-center items-center md:border-b-2 border-black ">
                            <div className="flex flex-col items-center  p-4 lg:p-0">
                                <IoIosCall className="text-3xl md:text-5xl" />
                                <h1 className="text-xl font-bold text-[#4CCD99]">Call Us</h1>
                                <p className="text-balance text-center">+01722877040<br /> +01647065089</p>
                            </div>
                        </div>


                        {/* 3 */}
                        <div className="bg-[#F3F3F3] flex justify-center items-center md:border-r-2 border-black ">
                            <div className="flex flex-col items-center  p-4 lg:p-0">
                                <AiTwotoneMail className="text-3xl md:text-5xl" />
                                <h1 className="text-xl font-bold text-[#4CCD99]">Email Us</h1>
                                <p className="text-balance text-center">aBlogger@gmail.com<br />mdafsar99009@gmail.com</p>
                            </div>
                        </div>


                        {/* 4 */}
                        <div className="bg-[#F3F3F3] flex justify-center items-center ">
                            <div className="flex flex-col items-center  p-4 lg:p-0">
                                <IoMdTime className="text-3xl md:text-5xl" />
                                <h1 className="text-xl font-bold text-[#4CCD99]">Working Hours</h1>
                                <p className="text-balance text-center">Mon-Fri: 9AM to 5PM<br /> Sunday: 9AM to 1 PM</p>
                            </div>
                        </div>

                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit} data-aos="fade-left"  data-aos-duration="3000" data-aos-delay="1000">
                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 bg-[#F3F3F3] rounded " required />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded bg-[#F3F3F3]" value={'aBlogger@gmail.com'}  required/>
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded bg-[#F3F3F3]" required></textarea>
                        </div>
                        <button type="submit" className="w-full btn bg-[#4CCD99] text-white font-bold">Send Message</button>
                    </form>

                </div>

            </div>


        </div>
    );
};

export default Contract;