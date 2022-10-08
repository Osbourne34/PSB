import React from 'react';

import { Contact } from '../../components';

export const ContactList = () => {
    return (
        <>
            <Contact name="Вася Пупкин" isFavorite={false} />
            <Contact name="Вася Пупкин" isFavorite={true} />
            <Contact name="Вася Пупкин" isFavorite={true} />
            <Contact name="Вася Пупкин" isFavorite={true} />
            <Contact name="Вася Пупкин" isFavorite={true} />
            <Contact name="Вася Пупкин" isFavorite={true} />
            <Contact name="Вася Пупкин" isFavorite={true} />
        </>
    );
};
