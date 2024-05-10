import { useQuery } from "@tanstack/react-query";
import RecentCard from "./RecentCard";
import axios from "axios";
import Marquee from "react-fast-marquee";

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
        <div className="py-10 space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Recent blog</h1>
                <p>Blogging is like work, but without coworkers thwarting you at every turn. <br /> Scott Adams Blogging is a conversation, not a code.</p>
            </div>

            <Marquee >
                <div className="flex gap-10 p-8">
                    {
                        data?.map((blog, i) => <RecentCard key={i} blog={blog} />)
                    }
                </div>
            </Marquee>




        </div>
    );
};

export default RecentBlog;