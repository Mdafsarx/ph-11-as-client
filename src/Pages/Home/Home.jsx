import Banner from "./Banner";
import RecentBlog from "./RecentBlog";

const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
           <div className="max-w-7xl mx-auto">
            <RecentBlog/>
           </div>
        </div>
    );
};

export default Home;