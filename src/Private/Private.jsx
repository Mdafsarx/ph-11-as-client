import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = ({ children }) => {

    const { User, loading } = useAuth();
    const location=useLocation()
    

    if (loading) {
    return <div className="flex items-center justify-center min-h-[80vh]">
            <span className="loading loading-bars loading-md size-16"></span>
        </div>
    }

    if (User) { return children }

    return <Navigate to={'/login'}  state={location.pathname}/>
};

export default Private;