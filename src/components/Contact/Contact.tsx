import React from 'react';

import { yellow } from '@mui/material/colors';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
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
                pl: '6px',
            }}
        >
            <Typography fontSize={20}>{name}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <IconButton size="small">
                    <StarRateRoundedIcon
                        sx={{
                            color: isFavorite ? yellow[400] : '',
                            fontSize: '40px',
                        }}
                    />
                </IconButton>
                <IconButton size="medium">
                    <EditIcon sx={{ fontSize: '34px' }} />
                </IconButton>
            </Box>
        </Box>
    );
};
