import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../customRequest';
import { RootState } from '../../store/store';
import { contact } from '../../types/contact';
import { AxiosError } from 'axios';

type ContactsState = {
    contacts: contact[];
    isFavorite: boolean;
    searchValue: string;
    loading: boolean;
    error: boolean;
};

const initialState: ContactsState = {
    contacts: [],
    isFavorite: true,
    searchValue: '+7',
    loading: false,
    error: false,
};

export const getContacts = createAsyncThunk<
    contact[],
    { isFavorite: boolean; searchValue: string }
>(
    'contacts/getContacts',
    async ({ isFavorite, searchValue }, { rejectWithValue }) => {
        try {
            const response = await $api.get(
                `contacts/${
                    isFavorite
                        ? '?ordering=-is_favorite'
                        : '?ordering=is_favorite'
                }&search=${searchValue}`,
            );
            return response.data;
        } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    },
);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFavorite(state) {
            state.isFavorite = !state.isFavorite;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.pending, (state) => {
            state.contacts = [];
            state.error = false;
            state.loading = true;
        });
        builder.addCase(getContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.contacts = action.payload;
        });
        builder.addCase(getContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const contacts = (state: RootState) => state.contacts;

export const { setFavorite, setSearchValue } = contactsSlice.actions;

export default contactsSlice.reducer;
