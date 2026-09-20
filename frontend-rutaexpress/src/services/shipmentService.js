import api from './api';

// Obtener todos los envíos desde Oracle a través del BFF
export const getShipments = async () => {
    const response = await api.get('/api/v1/shipments'); 
    return response.data;
};

// Enviar un nuevo envío mediante POST para guardarlo en la base de datos
export const createShipment = async (shipmentData) => {
    const response = await api.post('/api/v1/shipments', shipmentData);
    return response.data;
};

// Añade esta función a tu shipmentService.js
export const updateShipmentStatus = async (id, newStatus) => {
    // Ajusta la URL según la ruta de tu controlador en Spring Boot
    const response = await axios.patch(`/api/shipments/${id}/status`, { 
        status: newStatus 
    });
    return response.data;
};

// Añade esto a shipmentService.js
export const getShipmentHistory = async (shipmentId) => {
    try {
        // Descomenta esto cuando tu endpoint de Spring Boot esté listo:
        // const response = await axios.get(`/api/shipments/${shipmentId}/history`);
        // return response.data;

        // Por ahora, retornamos datos simulados (Mock) para que puedas armar la UI:
        return [
            { id: 1, status: 'Creado', timestamp: new Date().toISOString(), location: 'Bodega Central', user: 'Despachador' },
            { id: 2, status: 'En Ruta', timestamp: new Date().toISOString(), location: 'Ruta 68', user: 'Conductor' }
        ];
    } catch (error) {
        console.error("Error obteniendo historial", error);
        return [];
    }
};