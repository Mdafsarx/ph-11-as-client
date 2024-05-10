import { useQuery } from "@tanstack/react-query";
import RecentCard from "./RecentCard";
import axios from "axios";

const RecentBlog = () => {


    const { data } = useQuery({
        queryKey: ['recent-blog'],
        queryFn: () =>
            axios.get('http://localhost:2000/blogs')
                .then((data) =>
                    data.data
                ),
    })



    return (
        <div className="py-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Recent blog</h1>
                <p>Blogging is like work, but without coworkers thwarting you at every turn. <br /> Scott Adams Blogging is a conversation, not a code.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {
                data?.map((blog,i)=><RecentCard key={i} blog={blog}/>)
              }
            </div>


        </div>
    );
};

export default RecentBlog;