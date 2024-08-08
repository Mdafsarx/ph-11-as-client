import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const WishListCard = ({ Wishlist }) => {
    const { title, image, description, category , _id , iD } = Wishlist || {};
    const axiosUrl=useAxiosUrl();
    const {refresh,setRefresh}=useAuth()
    const nav = useNavigate()


    return (
        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
            <div className="flex flex-col md:flex-row items-center shadow-lg rounded-3xl rounded-tl-none border-2 border-black md:h-64">

                <figure className="m-4">
                    <img src={image} className="w-96 rounded-3xl h-56" />
                </figure>

                <div className="p-6 space-y-1">
                    <h2 className="text-xl font-bold font-serif">{title}</h2>
                    <p><span className="font-bold">Category: </span>{category}</p>
                    <p>{description}...</p>
                    <div className="flex items-center gap-3">
                        <button className="btn btn-sm bg-[#4CCD99] hover:bg-[#4CCD99] hover:text-[#E21818] text-white" onClick={() => {
                            nav(`/${iD}`)
                        }}>Details</button>
                        <button className="btn btn-sm bg-[#E21818] hover:bg-[#E21818] hover:text-[#4CCD99] text-white" onClick={()=>{
                              
                              axiosUrl.delete(`/wishlist/${_id}`)
                              .then(data=>{
                                if(data.data.deletedCount === 1){
                                     setRefresh(!refresh)
                                }
                              })
                              .catch(error=>console.log(error))
                         

                        }}>Remove</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WishListCard;