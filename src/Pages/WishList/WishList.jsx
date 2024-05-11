import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import useAuth from "../../hooks/useAuth";
import WishListCard from "./WishListCard";
import Empty from "./Empty";


const WishList = () => {
    const { User, loading } = useAuth()
    const axiosUrl = useAxiosUrl()

    const uri = `/wishlist/${User?.email}`
    const { data } = useQuery({
        queryKey: ['wishlist', loading],
        queryFn: () =>
            axiosUrl.get(uri)
                .then((data) =>
                    data.data
                ),
    })





    return (
        <div className="max-w-7xl mx-auto my-20">
            {
                loading ?
                    <div className="min-h-[60vh]  flex justify-center items-center">
                        <span className="loading loading-bars loading-lg size-24"></span>
                    </div>
                    :
                    data?.length === 0 ?
                        <Empty text={'You have not added anything'} />
                        :
                        <div className="space-y-8">
                            {
                                data?.map((list,i) => <WishListCard key={i} Wishlist={list} />)
                            }
                        </div>
            }
        </div>
    );
};

export default WishList;