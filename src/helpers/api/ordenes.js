import { toast } from 'sonner';
import api from '../libs/axios';

// Manejo de errores
const handleError = (error) => {
  if (error.response) {
    toast.error(error.response.data.mensaje);
  } else {
    toast.error('Error de conexión, intente más tarde');
  }
};

// PETICIONES DE ORDENES

// 1. GET - Obtener ordenes
export const getOrdenes = async () => {
  try {
    // Petición
    const response = await api.get('ordenes');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener orden por ID
export const getOrdenById = async (id) => {
  try {
    // Petición
    const response = await api.get(`ordenes/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. GET - Obtener ordenes por cliente
export const getOrdenesByCliente = async (id) => {
  try {
    // Petición
    const response = await api.get(`ordenes/cliente/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 4. POST - Registrar orden
export const registerOrden = async (data) => {
  try {
    const orden = {
      fecha_orden: data.fecha_orden,
      cliente_id: data.cliente_id,
      detalles: data.detalles,
    };

    // Petición
    const response = await api.post('ordenes', orden);

    // Mensaje de éxito
    toast.success(`Orden: ${response.data.id} registrada correctamente.`);
  } catch (error) {
    handleError(error);
  }
};

// 5. POST - Registrar responsable de orden
export const registerResponsableOrden = async (data) => {
  try {
    const responsable = {
      orden_id: data.orden_id,
      encargado_id: data.encargado_id,
      observaciones: data.observaciones,
    };

    // Petición
    const response = await api.post('ordenes/responsable', responsable);

    // Mensaje de éxito
    toast.success(
      `Responsable: ${response.data.usuario_id} asignado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 6. PATCH - Cambiar estado de orden
export const cambiarEstadoOrden = async (id, { estado }) => {
  try {
    // Petición
    const response = await api.patch(`ordenes/cambiarEstado/${id}`, {
      estado,
    });

    // Mensaje de éxito
    toast.success(
      `Orden No. ${response.data.id} ${
        estado === 'V' ? 'Validada' : 'Rechazada'
      } correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};
