import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Nav/>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;