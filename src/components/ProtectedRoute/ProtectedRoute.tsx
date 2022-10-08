import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { auth } from '../../store/slices/authSlice';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuth } = useAppSelector(auth);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};
