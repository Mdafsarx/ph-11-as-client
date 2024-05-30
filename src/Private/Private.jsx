import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spin from "./Spin";

const Private = ({ children }) => {

    const { User, loading } = useAuth();
    const location=useLocation()
    

    if (loading) {
    return <Spin/>
    }

    if (User) { return children }

    return <Navigate to={'/login'}  state={location.pathname}/>
};

export default Private;