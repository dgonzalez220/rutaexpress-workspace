import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // Ajusta según la ruta base de tu BFF
    headers: {
        'Content-Type': 'application/json'
    }
});

// Variable interna para almacenar la función que obtiene el token
let tokenGetter = null;

// Función para registrar el proveedor del token una sola vez (ej. al iniciar la app)
export const setAuthTokenGetter = (getTokenFunction) => {
    tokenGetter = getTokenFunction;
};

// El interceptor se registra UNA SOLA VEZ al cargar el archivo
api.interceptors.request.use(async (config) => {
    if (tokenGetter) {
        try {
            const token = await tokenGetter();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error("Error al obtener el token en el interceptor:", error);
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;