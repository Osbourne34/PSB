import axios from 'axios';
import { API_URL } from '../constants';

export const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    if (config.headers === undefined) return {};
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        'accessToken',
    )}`;

    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.post(
                    API_URL + 'user/token/refresh/',
                    {
                        refresh: localStorage.getItem('refreshToken'),
                    },
                );
                localStorage.setItem('accessToken', response.data.access);
                return $api.request(originalRequest);
            } catch (err) {
                console.log(err);
            }
        }
    },
);
