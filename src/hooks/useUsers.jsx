import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "./useAxiosUrl";

const useUsers = () => {
    const axiosUrl=useAxiosUrl()

    const {data:Data=[]}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosUrl.get('/user')
            return res.data
        }
    })
    return {Data}
    
   
};

export default useUsers;