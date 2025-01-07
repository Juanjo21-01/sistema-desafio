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

// PETICIONES DE PROVEEDORES

// 1. GET - Obtener proveedores
export const getProveedores = async () => {
  try {
    // Petición
    const response = await api.get('proveedores');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener proveedor por ID
export const getProveedorById = async (id) => {
  try {
    // Petición
    const response = await api.get(`proveedores/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. POST - Registrar proveedor
export const registerProveedor = async (data) => {
  try {
    const proveedor = {
      nombre: data.nombre,
      nit: data.nit,
      direccion: data.direccion,
      telefono: data.telefono,
    };

    // Petición
    const response = await api.post('proveedores', proveedor);

    // Mensaje de éxito
    toast.success(
      `Proveedor: ${response.data.nombre} registrado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 4. PUT - Actualizar proveedor
export const updateProveedor = async (id, data) => {
  try {
    const proveedor = {
      nombre: data.nombre,
      nit: data.nit,
      direccion: data.direccion,
      telefono: data.telefono,
    };

    // Petición
    const response = await api.put(`proveedores/${id}`, proveedor);

    // Mensaje de éxito
    toast.success(
      `Proveedor: ${response.data.nombre} actualizado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 5. PATCH - Cambiar estado de proveedor
export const cambiarEstadoProveedor = async (id, { estado }) => {
  try {
    // Petición
    const response = await api.patch(`proveedores/cambiarEstado/${id}`, {
      estado,
    });

    // Mensaje de éxito
    toast.success(
      `Proveedor: ${response.data.nombre} ${
        estado ? 'activado' : 'desactivado'
      } correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 6. DELETE - Eliminar proveedor
export const deleteProveedor = async (id) => {
  try {
    // Petición
    const response = await api.delete(`proveedores/${id}`);

    // Mensaje de éxito
    toast.success(
      `Proveedor: ${response.data.nombre} eliminado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};
