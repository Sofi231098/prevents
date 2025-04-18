import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const api = (axios: AxiosInstance) => {
    return {
        get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config)
    }
}

export default api(axiosInstance);
