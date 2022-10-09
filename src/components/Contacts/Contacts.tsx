import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { contacts, setFavorite } from '../../store/slices/contactsSlice';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Contacts = () => {
    const dispatch = useAppDispatch();
    const { isFavorite } = useAppSelector(contacts);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
                onClick={() => dispatch(setFavorite(true))}
                variant="text"
                color={isFavorite ? 'info' : 'inherit'}
                sx={{ fontSize: '20px' }}
            >
                Избранное
            </Button>
            <Button
                onClick={() => dispatch(setFavorite(false))}
                variant="text"
                color={!isFavorite ? 'info' : 'inherit'}
                sx={{ fontSize: '20px' }}
            >
                Контакты
            </Button>
        </Box>
    );
};
