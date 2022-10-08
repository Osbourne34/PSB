import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../customRequest';
import { RootState } from '../../store/store';
import { authResponse } from '../../types/authResponse';
import { loginFormFields } from '../../types/loginFormFields';
import { AxiosError } from 'axios';

type AuthState = {
    isAuth: boolean;
    loading: boolean;
    error: boolean;
    token: string;
};

const initialState: AuthState = {
    isAuth: true,
    loading: false,
    error: false,
    token: '',
};

export const login = createAsyncThunk<authResponse, loginFormFields>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await $api.post('user/token/', data);
            return response.data;
        } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.access;
            state.loading = false;
            state.isAuth = true;
            state.error = false;
        });
        builder.addCase(login.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const auth = (state: RootState) => state.auth;

export const {} = authSlice.actions;

export default authSlice.reducer;
