import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
    getContacts,
    getOtherClients,
    contacts as contactsSelector,
} from '../../store/slices/contactsSlice';

import Typography from '@mui/material/Typography';

import { Loader, Contact } from '../../components';
import { FoundContact } from '../FoundContact/FoundContact';

export const ContactList = () => {
    const dispatch = useAppDispatch();
    const { contacts, foundContact, isFavorite, searchValue, loading, error } =
        useAppSelector(contactsSelector);

    useEffect(() => {
        if (searchValue.length === 12 && !contacts.length) {
            dispatch(getOtherClients(searchValue));
        } else {
            dispatch(getContacts({ isFavorite, searchValue }));
        }
    }, [dispatch, isFavorite, searchValue]);

    return (
        <>
            {loading && <Loader />}
            {error && <Typography variant="h5">Произошла ошибка</Typography>}
            {contacts.map(
                ({ id, first_name, lst_name, last_name, is_favorite }) => {
                    return (
                        <Contact
                            key={id}
                            name={`${first_name} ${
                                lst_name ? lst_name : last_name
                            }`}
                            isFavorite={is_favorite}
                        />
                    );
                },
            )}
            {searchValue.length === 12 && foundContact.length > 0 && (
                <FoundContact
                    id={foundContact[0].id}
                    firstName={foundContact[0].first_name}
                    lastName={foundContact[0].last_name}
                    phone={foundContact[0].phone}
                    banks={foundContact[0].banks}
                />
            )}
            {!loading &&
                contacts.length < 1 &&
                foundContact.length < 1 &&
                searchValue.length <= 12 && (
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        Пользователь не найден
                    </Typography>
                )}
        </>
    );
};
