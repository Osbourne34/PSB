import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { auth, login } from '../../store/slices/authSlice';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import { loginFormFields } from '../../types/loginFormFields';

export const LoginForm = () => {
    const { loading, error } = useAppSelector(auth);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<loginFormFields>();

    const onSubmit: SubmitHandler<loginFormFields> = async (
        data: loginFormFields,
    ) => {
        dispatch(login(data))
            .unwrap()
            .then(() => {
                navigate('/messengers', { replace: true });
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <Alert
                    variant="filled"
                    severity="error"
                    sx={{ mt: 2, width: '100%' }}
                >
                    Ошибка при авторизаций
                </Alert>
            )}
            <Controller
                name="email"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Невалидный Email',
                    },
                }}
                render={({ field }) => (
                    <TextField
                        type="text"
                        label="Email"
                        helperText={errors.email?.message}
                        error={!!errors.email?.message}
                        disabled={loading}
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{
                    required: 'Обязательное поле',
                }}
                render={({ field }) => (
                    <TextField
                        type="password"
                        label="Password"
                        helperText={errors.password?.message}
                        error={!!errors.password?.message}
                        disabled={loading}
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Button
                disabled={loading}
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                color="warning"
                sx={{ mt: 1 }}
            >
                Войти
            </Button>
        </form>
    );
};
