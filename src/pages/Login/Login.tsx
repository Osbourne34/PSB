import React from 'react';

import Container from '@mui/material/Container';

import { Header, LoginForm } from '../../components';

export const Login = () => {
    return (
        <>
            <Header title="Авторизация" />
            <Container sx={{ pt: 4, pb: 2 }}>
                <LoginForm />
            </Container>
        </>
    );
};
