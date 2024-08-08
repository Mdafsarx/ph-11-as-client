import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import useAuth from "../../hooks/useAuth";
import WishListCard from "./WishListCard";
import Empty from "./Empty";
import { Link } from "react-router-dom";


const WishList = () => {
    const { User, loading , refresh } = useAuth()
    const axiosUrl = useAxiosUrl()

    const uri = `/wishlist/${User?.email}`
    const { data } = useQuery({
        queryKey: ['wishlist', loading , refresh],
        queryFn: () =>
            axiosUrl.get(uri,{withCredentials:true})
                .then((data) =>{
                    // console.log(data.data)
                   return data.data
                }
                ).catch(error=>console.log(error))
    })





    return (
        <div className={`max-w-7xl mx-auto my-10  px-5 ${data?.length===1||data?.length===2 ? 'my-10 md:my-32':'my-10 md:my-16'}`}>
         
            <div className="flex justify-between items-center mb-4 md:mb-6">
                <h1 className="text-2xl md:text-4xl text-[#E21818]">Wishlist ({data?.length})</h1>
                <Link to={'/allBlogs'} className="btn bg-[#4CCD99] text-white hover:bg-[#4CCD99] hover:text-[#E21818]">Add Blog</Link>
            </div>
         
            {
                loading ?
                    <div className="min-h-[60vh]  flex justify-center items-center">
                        <span className="loading loading-bars loading-lg size-24"></span>
                    </div>
                    :
                    data?.length === 0 ?
                        <Empty text={'You have not added anything'} />
                        :
                        <div className="grid lg:grid-cols-2 gap-6">
                            {
                                data?.map((list,i) => <WishListCard key={i} Wishlist={list} />)
                            }
                        </div>
            }
        </div>
    );
};

export default WishList;