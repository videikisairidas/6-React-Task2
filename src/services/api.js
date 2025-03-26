import axios from 'axios';
import { getAccessToken } from './authService';

const api = axios.create({
    baseURL: 'https://localhost:8081/api',
});

api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            try {
                // Handle token refresh logic here if needed
                console.error('Token refresh error', error);
                // Handle token refresh failure
            } catch (err) {
                console.error('Refresh token error', err);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
