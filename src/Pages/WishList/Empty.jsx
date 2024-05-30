
import { Link } from "react-router-dom";
import img from "../../assets/sad-face-90 (1).png"

const Empty = ({text}) => {

    return (
        <div  data-aos="zoom-in"  data-aos-duration="3000"   >
            <section className="flex items-center  ">

                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-10 space-y-8 text-center sm:max-w-md">
                    <img src={img} className="w-2/4" />
                    <p className="text-3xl text-purple-500 px-10">{text}
                    </p>
                    <Link className="btn bg-[#E21818] text-white" to={'/allBlogs'}>Add Blog</Link>
                </div>

            </section>
        </div>
    );
};

export default Empty;
