/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const Professional = () => {
    return (
        <div className="mb-20 ">

            <div className="border-2 border-dashed border-x-0 border-black ">
                <div className="text-center  py-4 my-1  bg-gradient-to-r from-[#FF76CECC] to-[#FF76CE4D] ">
                    <h1 className="text-3xl font-bold">Professional Blogs</h1>
                    <p>Don't focus on having a great blog. Focus <br /> on producing a blog that's great for your readers. </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-14 px-5 lg:px-0">

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <div className="flex flex-col items-center " data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="500">
                        <div className="radial-progress bg-primary text-secondary-content border-4 border-primary " style={{ "--value": 90, "--size": "10rem" }} role="progressbar">90%</div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">Deep Space Mysteries</h1>
                            <p className="text-balance">Exploring cosmic mysteries  in <br /> the  vast expanse of deep space.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <div className="flex flex-col items-center" data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="500">
                        <div className="radial-progress bg-gray-700 text-secondary-content border-4 border-gray-700 " style={{ "--value": 70, "--size": "10rem" }} role="progressbar">70%</div>

                        <div className="text-center">
                            <h1 className="text-lg font-bold">Exploring the Cosmos</h1>
                            <p className="text-balance">Explore universe's wonders through <br /> commentary, research, and <br /> captivating visuals</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <div className="flex flex-col items-center" data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="500">
                        <div className="radial-progress bg-slate-300 text-secondary-content border-4 border-slate-300 " style={{ "--value": 50, "--size": "10rem" }} role="progressbar">50%</div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold">Space Journeys</h1>
                            <p className="text-balance">Embark on odyssey through <br /> cosmos exploring latest discoveries <br /> and timeless mysteries.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <div className="flex flex-col items-center" data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="500">
                        <div className="radial-progress bg-[#4CCD99] text-secondary-content border-4 border-[#4CCD99] " style={{ "--value": 60, "--size": "10rem" }} role="progressbar">60%</div>

                        <div className="text-center">
                            <h1 className="text-lg font-bold">Universe Navigation</h1>
                            <p className="text-balance">Guiding readers through cosmos <br /> from celestial phenomena to <br />astrophysical frontiers.</p>
                        </div>

                    </div>
                </motion.div>

            </div>


        </div>
    );
};

export default Professional;