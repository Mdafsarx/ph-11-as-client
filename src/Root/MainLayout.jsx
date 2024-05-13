import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;