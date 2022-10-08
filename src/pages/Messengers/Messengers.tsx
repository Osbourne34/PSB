import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Messengers = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: 2,
            }}
        >
            <Typography sx={{ mb: 2 }} variant="h4" textAlign="center">
                Перевод по номеру
            </Typography>
            <Typography sx={{ mb: 2 }} variant="h6">
                Вы можете воспользоваться переводом в мессенджере
            </Typography>
            <Link
                href="#"
                color="inherit"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    mb: 2,
                }}
            >
                <TelegramIcon
                    fontSize="large"
                    sx={{ mr: 1, color: '#2BA2DE' }}
                />
                <Typography>Telegram</Typography>
            </Link>
            <Link
                href="#"
                color="inherit"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                }}
            >
                <WhatsAppIcon
                    fontSize="large"
                    sx={{ mr: 1, color: '#53C25B' }}
                />
                <Typography>WhatsApp</Typography>
            </Link>
            <Button variant="contained" fullWidth sx={{ mt: 4 }}>
                Продолжить через сайт
            </Button>
        </Box>
    );
};
