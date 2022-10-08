import React from 'react';

import Container from '@mui/material/Container';

import {
    ContactList,
    Contacts,
    Header,
    PhoneSearchField,
} from '../../components';

export const Search = () => {
    return (
        <>
            <Header title="Перевод по номеру" />

            <Container sx={{ pt: 6, pb: 2 }}>
                <PhoneSearchField />
                <Contacts />
            </Container>
            <Container
                sx={{
                    height: 'calc(100vh - 396px)',
                    bgcolor: 'grey.100',
                    overflow: 'auto',
                }}
            >
                <ContactList />
            </Container>
        </>
    );
};
