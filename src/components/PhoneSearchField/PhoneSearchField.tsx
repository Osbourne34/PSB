import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { setSearchValue } from '../../store/slices/contactsSlice';
import { useDebounce } from '../../hooks/debounce/debounce';

import TextField from '@mui/material/TextField';

export const PhoneSearchField = () => {
    const dispatch = useAppDispatch();
    const [phone, setPhone] = useState<string>('+7');
    const debounce = useDebounce(phone);

    useEffect(() => {
        dispatch(setSearchValue(debounce));
    }, [debounce, dispatch]);

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
