import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import useAuth from "../../hooks/useAuth";
import WishListCard from "./WishListCard";
import Empty from "./Empty";


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
        <div className="max-w-7xl mx-auto my-10 md:my-20 px-5 ">
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