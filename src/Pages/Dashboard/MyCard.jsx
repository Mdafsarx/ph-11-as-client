import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import useAuth from "../../hooks/useAuth";
import AllBlogCard from "../allBlogs/AllBlogCard";

const MyCard = () => {
    const axiosUrl = useAxiosUrl();
    const { User } = useAuth();



    const { data:Data =[] } = useQuery({
        queryKey: ['myBlogData',User?.email],
        queryFn: async () => {
            const res = await axiosUrl(`/blog/${User?.email}`)
            return res.data
        }
    })



    return (
        <div>
            <div className="md:max-w-6xl mx-auto p-3 md:p-10 space-y-6">
            <h1 className="text-center font-bold text-3xl border-b-2 pb-4 border-black">My blogs ({Data.length})</h1>
                {
                    Data?.map(blog=><AllBlogCard key={blog._id} data={blog}/>)
                }
            </div>
        </div>
    );
};

export default MyCard;