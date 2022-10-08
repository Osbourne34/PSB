import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../customRequest';
import { RootState } from '../../store/store';
import { contact } from '../../types/contact';
import { AxiosError } from 'axios';

type ContactsState = {
    contacts: contact[];
    loading: boolean;
    error: boolean;
};

const initialState: ContactsState = {
    contacts: [],
    loading: false,
    error: false,
};

export const getContacts = createAsyncThunk<contact[], undefined>(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await $api.get('contacts/');
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
    reducers: {},
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

export const {} = contactsSlice.actions;

export default contactsSlice.reducer;
