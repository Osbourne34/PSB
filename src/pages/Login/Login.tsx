import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LoginForm } from '../../components';

export const Login = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2,
            }}
        >
            <Typography variant="h4">Авторизация</Typography>
            <LoginForm />
        </Box>
    );
};
