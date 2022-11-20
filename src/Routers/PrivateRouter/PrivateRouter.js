import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/utilities/Button/Loading';
import { userContext } from '../../Contexts/AuthContexts';

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(userContext);
    const location = useLocation();
    if(loader){
        return <Loading></Loading>
    }
    if(user?.uid && user?.email){
        return children
    }
    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
};

export default PrivateRouter;