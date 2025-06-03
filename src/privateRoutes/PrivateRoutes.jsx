import React, { use } from 'react';
import { AuthContext } from '../contextProvider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation()

    if (loading) return <div className='flex items-center justify-center h-screen'>
        <span className="loading loading-ring loading-xl "></span>
    </div>

    if (!user) return <Navigate state={location.pathname} to='/auth/login'></Navigate>



    return children
};

export default PrivateRoutes;