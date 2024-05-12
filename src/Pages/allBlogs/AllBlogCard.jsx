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
        <div>
            <div className=" flex items-center  bg-gradient-to-tl from-[#000000DB] to-[#00000033] shadow-xl text-white rounded-2xl h-56">

                <figure className="m-4 mr-0 ">
                    <img src={image} alt="Movie" className="rounded-xl w-56 h-40" />
                </figure>
                <div className="pl-3 space-y-1">
                    <h2 className="text-lg font-black font-serif">{title}</h2>
                    <p><span className="font-bold">Category: </span>{category}</p>
                    <p className="text-balance "> {description} </p>
                </div>
                <div className="flex flex-col justify-center gap-4 items-center pr-4">
                    <button className="btn  border-none text-white bg-[#4CCD99] btn-sm w-16">Details</button>
                    <button className="btn border-none text-white bg-[#E21818] btn-sm w-16" onClick={HandleWishList}>Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default AllBlogCard;