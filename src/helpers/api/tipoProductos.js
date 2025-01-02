import { toast } from 'sonner';
import api from '../libs/axios';

// Manejo de errores
const handleError = (error) => {
  if (error.response) {
    toast.error(error.response.data.message);
  } else {
    toast.error('Error de conexión, intente más tarde');
  }
};

// PETICIONES DE TIPO DE PRODUCTOS

// 1. GET - Obtener tipos de productos
export const getTipoProductos = async () => {
  try {
    // Petición
    const response = await api.get('tipo-productos');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener tipo de producto por ID
export const getTipoProductoById = async (id) => {
  try {
    // Petición
    const response = await api.get(`tipo-productos/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. POST - Registrar tipo de producto
export const registerTipoProducto = async ({ nombre }) => {
  try {
    // Petición
    const response = await api.post('tipo-productos', { nombre });

    // Mensaje de éxito
    toast.success(
      `Tipo de producto: ${response.data.nombre} registrado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 4. PUT - Actualizar tipo de producto
export const updateTipoProducto = async (id, { nombre }) => {
  try {
    // Petición
    const response = await api.put(`tipo-productos/${id}`, { nombre });

    // Mensaje de éxito
    toast.success(
      `Tipo de producto: ${response.data.nombre} actualizado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 5. PATCH - Cambiar estado de tipo de producto
export const cambiarEstadoTipoProducto = async (id, { estado }) => {
  try {
    // Petición
    const response = await api.patch(`tipo-productos/cambiarEstado/${id}`, {
      estado,
    });

    // Mensaje de éxito
    toast.success(
      `Tipo de producto: ${response.data.nombre} ${
        response.data.estado ? 'activado' : 'desactivado'
      } correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 6. DELETE - Eliminar tipo de producto
export const deleteTipoProducto = async (id) => {
  try {
    // Petición
    const response = await api.delete(`tipo-productos/${id}`);

    // Mensaje de éxito
    toast.success(
      `Tipo de producto: ${response.data.nombre} eliminado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};
