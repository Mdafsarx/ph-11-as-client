import { useNavigate } from "react-router-dom";
import img1 from "../../assets/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg"
import img2 from "../../assets/icons8-books-100.png"

const Banner = () => {
    const nav=useNavigate()
    return (
        <div className="">
            <div className="hero min-h-[80vh] " style={{ backgroundImage: `url(${img1})` }}>
                <div className="bg-gradient-to-r from-[#00000080] to-[#0000004D] text-center p-5 text-white w-full h-[80vh]">
                    <div className="space-y-3 flex flex-col justify-center items-center h-[80vh]" data-aos="fade-left"  data-aos-duration="3000" data-aos-delay="1000">
                        <h1 className="text-6xl font-bold ">Blog is <span className="text-[#E21818]">love</span></h1>
                        <p className="mb-5">Don’t forget to spend time on your blog <br /> today! Why because blogging is fun</p>
                        <button className="btn  btn-outline text-white border-white border-2 flex items-center gap-0 font-bold" onClick={()=>{
                            nav('/allBlogs')
                        }}>Blogs
                          <img src={img2} alt="" className="w-8" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;