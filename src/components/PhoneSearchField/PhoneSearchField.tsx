import React, { useState } from 'react';

import TextField from '@mui/material/TextField';

export const PhoneSearchField = () => {
    const [phone, setPhone] = useState<string>('+7');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setPhone('+7');
        }
        if (
            !(e.target.value.length < 2) &&
            e.target.value.length <= 12 &&
            !isNaN(+e.target.value[e.target.value.length - 1])
        ) {
            setPhone(e.target.value);
        }
    };

    return (
        <TextField
            type="phone"
            value={phone}
            onChange={handleChange}
            label="Номер телефона получателя"
            fullWidth
        />
    );
};
