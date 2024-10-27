import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(user, loading, location);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoutes;