import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export function get(url: string, params: any) {
    return api.get(url, { params });
}

export function post(url: string, data: any) {
    return api.post(url, data);
}

export function put(url: string, data: any) {
    return api.put(url, data);
}

export function del(url: string) {
    return api.delete(url);
}