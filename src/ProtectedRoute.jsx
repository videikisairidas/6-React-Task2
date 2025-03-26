
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';  // Ensure the correct extension

const ProtectedRoute = ({ component: Component }) => {
    const { accessToken } = useAuth();

    return accessToken ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

