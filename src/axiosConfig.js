import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://refreshing-expression-production.up.railway.app', // URL base de tu backend
    timeout: 10000, // Opcional: tiempo de espera para las solicitudes
});

export default axiosInstance;
