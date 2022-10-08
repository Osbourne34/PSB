import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login, Messengers } from '../../pages';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="messengers"
                element={
                    <ProtectedRoute>
                        <Messengers />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};
