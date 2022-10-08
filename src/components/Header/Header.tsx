import React from 'react';

import logo from '../../assets/images/logo.png';

import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #67669B, #4C4C76)',
            }}
        >
            <Container sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: '205px', height: '63px' }}
                    />
                </Box>
                <Typography variant="h5" color="white" sx={{ pt: 12 }}>
                    {title}
                </Typography>
            </Container>
        </Box>
    );
};
