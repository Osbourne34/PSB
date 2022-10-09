import React from 'react';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Header } from '../../components';

export const Payment = () => {
    return (
        <>
            <Header title={'Перевод по номеру'} />
            <Container sx={{ pt: 4, pb: 2 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Карта
                </Typography>
                <Box
                    sx={{
                        mb: 4,
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 3,
                        bgcolor: 'grey.200',
                    }}
                >
                    <Box sx={{ mb: 2 }}>
                        <Typography fontSize={20}>Карта 1</Typography>
                        <Typography fontSize={20}>
                            **** **** **** 1234
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={20}>Карта 1</Typography>
                        <Typography fontSize={20}>
                            **** **** **** 4321
                        </Typography>
                    </Box>
                </Box>

                <TextField type="number" label="Сумма" fullWidth />

                <TextField
                    type="text"
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ my: 4 }}
                />
                <Button variant="contained" color="warning" fullWidth>
                    Проверить данные
                </Button>
            </Container>
        </>
    );
};
