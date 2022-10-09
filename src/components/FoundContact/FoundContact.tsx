import React from 'react';

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import psb from '../../assets/images/banks/psb.png';
import sber from '../../assets/images/banks/sber.png';
import tinkoff from '../../assets/images/banks/tinkoff.png';
import vtb from '../../assets/images/banks/vtb.png';

import { bank } from '../../types/contact';

interface FoundContactProps {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    banks: bank[];
}

export const FoundContact = ({
    id,
    firstName,
    lastName,
    phone,
    banks,
}: FoundContactProps) => {
    const navigate = useNavigate();

    return (
        <Box onClick={() => navigate('/payment')} sx={{ py: 2, pl: '8px' }}>
            <Typography sx={{ fontSize: 20, mb: 1 }}>
                {firstName} {lastName}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>{phone}</Typography>

            <Box sx={{ mt: 1 }}>
                {banks?.map(({ id, name }: bank) => {
                    if (name === 'ВТБ') {
                        return (
                            <img
                                style={{
                                    width: '79px',
                                    height: '79px',
                                    marginRight: '10px',
                                }}
                                key={id}
                                src={vtb}
                                alt={name}
                            />
                        );
                    } else if (name === 'Тинькофф') {
                        return (
                            <img
                                style={{
                                    width: '79px',
                                    height: '79px',
                                    marginRight: '10px',
                                }}
                                key={id}
                                src={tinkoff}
                                alt={name}
                            />
                        );
                    } else if (name === 'БСП') {
                        return (
                            <img
                                style={{
                                    width: '79px',
                                    height: '79px',
                                    marginRight: '10px',
                                }}
                                key={id}
                                src={sber}
                                alt={name}
                            />
                        );
                    } else if (name === 'Арнольд') {
                        return (
                            <img
                                style={{
                                    width: '79px',
                                    height: '79px',
                                    marginRight: '10px',
                                }}
                                key={id}
                                src={psb}
                                alt={name}
                            />
                        );
                    }
                })}
            </Box>
        </Box>
    );
};
