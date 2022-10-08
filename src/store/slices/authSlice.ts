import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { API_URL } from '../../constants';
import { RootState } from '../../store/store';
import { authResponse } from '../../types/authResponse';
import { loginFormFields } from '../../types/loginFormFields';

type AuthState = {
    isAuth: boolean;
    loading: boolean;
    error: boolean;
};

const initialState: AuthState = {
    isAuth: false,
    loading: false,
    error: false,
};

export const login = createAsyncThunk<authResponse, loginFormFields>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL + '/token/', data);
            return response.data;
        } catch (err) {
            const error = err as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.isAuth = true;
            state.error = false;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const auth = (state: RootState) => state.auth;

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
