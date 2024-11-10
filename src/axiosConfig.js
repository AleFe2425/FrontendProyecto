import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://refreshing-expression-production.up.railway.app', // URL base del backend en Railway
    timeout: 10000, // Opcional: tiempo de espera para las solicitudes
});

export default axiosInstance;
