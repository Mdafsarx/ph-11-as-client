import { useNavigate } from "react-router-dom";
import img2 from "../../assets/icons8-books-100.png"
import img3 from "../../assets/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg"
import img4 from "../../assets/b.jpg"
import img5 from "../../assets/childrens-favourites-l.jpg"
import img6 from "../../assets/posts-and-pages-1jchsjg-yjxjvs-1080x720.jpeg"

const Banner = () => {
    const nav = useNavigate()
    return (
        <div className="">
            <>

                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-52  md:min-h-[90vh] p-4 md:p-0">

                    <div className="space-y-3 text-center flex flex-col items-center" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#E21818] via-[#4CCD99] to-[#4CCD99] bg-clip-text text-transparent">Every miss leads<br /> to a home run</h1>

                        <p className="mb-5 text-balance">Don’t forget to spend time on your blog <br /> today! Why because blogging is fun.</p>

                        <button className="btn bg-[#E21818] hover:bg-[#E21818]  hover:text-[#4CCD99] text-white border-0 flex items-center gap-0 font-bold" onClick={() => {
                            nav('/allBlogs')
                        }}>Blogs
                            <img src={img2} alt="" className="w-8" />
                        </button>
                    </div>

                    {/* img */}
                    <div className="grid grid-cols-2 gap-5 md:w-[35%]">
                     <img src={img3} className="size-72 rounded-3xl rounded-br-none" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200"/>
                     <img src={img4} className="size-72 rounded-3xl rounded-bl-none" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="500"/>
                     <img src={img5} className="size-72 rounded-3xl rounded-tr-none" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="800"/>
                     <img src={img6} className="size-72 rounded-3xl rounded-tl-none" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="1100"/>
                    </div>

                </div>

            </>
        </div>
    );
};

export default Banner;