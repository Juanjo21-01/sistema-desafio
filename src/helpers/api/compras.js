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

// PETICIONES DE COMPRAS

// 1. GET - Obtener compras
export const getCompras = async () => {
  try {
    // Petición
    const response = await api.get('compras');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener compra por ID
export const getCompraById = async (id) => {
  try {
    // Petición
    const response = await api.get(`compras/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. POST - Registrar compra
export const registerCompra = async (data) => {
  try {
    const compra = {
      fecha_compra: data.fecha_compra,
      observaciones: data.observaciones,
      proveedor_id: data.proveedor_id,
      usuario_id: data.usuario_id,
      detalles: data.detalles,
    };

    // Petición
    const response = await api.post('compras', compra);

    // Mensaje de éxito
    toast.success(`Compra: ${response.data.id} registrada correctamente.`);
  } catch (error) {
    handleError(error);
  }
};

// 4. PATCH - Cambiar estado de compra
export const cambiarEstadoCompra = async (id, { estado }) => {
  try {
    // Petición
    const response = await api.patch(`compras/cambiarEstado/${id}`, {
      estado,
    });

    // Mensaje de éxito
    toast.success(
      `Compra No. ${response.data.id} ${
        estado ? 'activada' : 'desactivada'
      } correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};
