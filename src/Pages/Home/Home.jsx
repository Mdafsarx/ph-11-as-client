import Banner from "./Banner";
import Information from "./Information";
import Newsletter from "./Newsletter";
import Professional from "./Professional";
import RecentBlog from "./RecentBlog";
import Social from "./Social";

const Home = () => {
    return (
        <div className="space-y-5">
            <Banner></Banner>
            <Information/>
            <RecentBlog />

            <div className="max-w-7xl mx-auto ">
                <Professional/>
                <Newsletter />
            </div>

            <Social/>

        </div>
    );
};

export default Home;