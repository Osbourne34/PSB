import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login, Messengers, Search } from '../../pages';
import { Payment } from '../../pages/Payment/Payment';
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
            <Route
                path="search"
                element={
                    <ProtectedRoute>
                        <Search />
                    </ProtectedRoute>
                }
            />
            <Route
                path="payment"
                element={
                    <ProtectedRoute>
                        <Payment />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};
