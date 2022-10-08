import React from 'react';

import { yellow } from '@mui/material/colors';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';

interface ContactProps {
    name: string;
    isFavorite: boolean;
}

export const Contact = ({ name, isFavorite }: ContactProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1,
            }}
        >
            <Typography>{name}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <IconButton size="large">
                    <StarIcon
                        sx={{
                            color: isFavorite ? yellow[400] : '',
                            fontSize: 'inherit',
                        }}
                    />
                </IconButton>
                <IconButton size="large">
                    <EditIcon sx={{ fontSize: 'inherit' }} />
                </IconButton>
            </Box>
        </Box>
    );
};
