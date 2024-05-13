import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosUrl from "../../hooks/useAxiosUrl";


const AllBlogCard = ({ data }) => {
    const { User } = useAuth();
    const axiosUrl=useAxiosUrl()



    const { title, image, description, category } = data || {}
    const wishlist={ title, image, description, category , email:User?.email }

    function HandleWishList() {
        if(!User)return toast.error('Login first')
        axiosUrl.post('/wishlist',wishlist)
        .then(data=>{if(data.data.insertedId)toast.success('Successfully added')})
        .catch(error=>console.log(error))        
    }


    return (
        <div data-aos="zoom-in"  data-aos-duration="3000" data-aos-delay="1000">
            <div className=" flex flex-col lg:flex-row items-center  bg-gradient-to-tl from-[#000000DB] to-[#00000033] shadow-xl text-white md:rounded-2xl h-96 lg:h-56">

                <figure className="m-4 mr-0 ">
                    <img src={image} alt="Movie" className="rounded-xl w-56 h-40" />
                </figure>
                <div className="pl-3 lg:space-y-1">
                    <h2 className="md:text-lg font-black font-serif">{title}</h2>
                    <p><span className="font-bold">Category: </span>{category}</p>
                    <p className="text-balance "> {description} </p>
                </div>
                <div className="flex flex-row lg:flex-col justify-center gap-4 items-center p-3 lg:pr-4 flex-grow">
                    <button className="btn  border-none text-white bg-[#4CCD99] btn-sm w-16">Details</button>
                    <button className="btn border-none text-white bg-[#E21818] btn-sm w-16" onClick={HandleWishList}>Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default AllBlogCard;