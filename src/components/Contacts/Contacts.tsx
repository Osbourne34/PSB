import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Contacts = () => {
    const [active, setActive] = useState<number>(0);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
                onClick={() => setActive(0)}
                variant="text"
                color={active === 0 ? 'info' : 'inherit'}
            >
                Избранное
            </Button>
            <Button
                onClick={() => setActive(1)}
                variant="text"
                color={active === 1 ? 'info' : 'inherit'}
            >
                Контакты
            </Button>
        </Box>
    );
};
