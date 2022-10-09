import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
    getContacts,
    contacts as contactsSelector,
} from '../../store/slices/contactsSlice';

import Typography from '@mui/material/Typography';

import { Loader, Contact } from '../../components';

export const ContactList = () => {
    const dispatch = useAppDispatch();
    const { contacts, isFavorite, searchValue, loading, error } =
        useAppSelector(contactsSelector);

    useEffect(() => {
        dispatch(getContacts({ isFavorite, searchValue }));
    }, [dispatch, isFavorite, searchValue]);

    return (
        <>
            {loading && <Loader />}
            {error && <Typography variant="h5">Произошла ошибка</Typography>}
            {contacts.map(({ id, first_name, surname, is_favorite }) => {
                return (
                    <Contact
                        key={id}
                        name={`${first_name} ${surname}`}
                        isFavorite={is_favorite}
                    />
                );
            })}
            {!loading && contacts.length < 1 && (
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Пользователь не найден
                </Typography>
            )}
        </>
    );
};
