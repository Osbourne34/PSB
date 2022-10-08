import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Header } from '../../components';

export const Messengers = () => {
    return (
        <>
            <Header title="Перевод по номеру" />
            <Container sx={{ pt: 4, pb: 2 }}>
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
                <Button
                    component={RouterLink}
                    to="/search"
                    variant="contained"
                    color="warning"
                    fullWidth
                    sx={{ mt: 4 }}
                >
                    Продолжить через сайт
                </Button>
            </Container>
        </>
    );
};
