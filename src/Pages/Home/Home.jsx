import Banner from "./Banner";
import Contract from "./Contract";
import Newsletter from "./Newsletter";
import Professional from "./Professional";
import RecentBlog from "./RecentBlog";

const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>

            <RecentBlog />
            <div className="max-w-7xl mx-auto ">
                <Professional/>
                <Contract />
                <Newsletter />
            </div>
        </div>
    );
};

export default Home;