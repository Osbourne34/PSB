import React from 'react';
import './App.css';

import Container from '@mui/material/Container';

import { AppRouter } from './components';

export const App = () => {
    return (
        <Container>
            <AppRouter />
        </Container>
    );
};
