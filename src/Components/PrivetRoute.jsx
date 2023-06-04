import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import useAdmin from "./Hooks/useAdmin";

const PrivetRoute = ({children}) => {

    const {user, loading} = useAuth()
    // console.log(user);
    const [isAdmin, isAdminLoading] = useAdmin()
    // console.log(isAdmin);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user || isAdmin){
        return children;                 
    }

    return <Navigate to='/login' state={{from: location} } replace></Navigate>
}

export {PrivetRoute}