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

// PETICIONES DE PRODUCTOS

// 1. GET - Obtener productos
export const getProductos = async () => {
  try {
    // Petición
    const response = await api.get('productos');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener producto por ID
export const getProductoById = async (id) => {
  try {
    // Petición
    const response = await api.get(`productos/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. POST - Registrar producto
export const registerProducto = async (data) => {
  try {
    const producto = {
      nombre: data.nombre,
      tipo_producto_id: data.tipo_producto_id,
      marca: data.marca,
      codigo: data.codigo,
      precio_unitario: data.precio_unitario,
      stock: data.stock,
      usuario_id: data.usuario_id,
      foto: data.foto,
    };

    // Petición
    const response = await api.post('productos', producto);

    // Mensaje de éxito
    toast.success(
      `Producto: ${response.data.nombre} registrado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 4. PUT - Actualizar producto
export const updateProducto = async (id, data) => {
  try {
    const producto = {
      nombre: data.nombre,
      tipo_producto_id: data.tipo_producto_id,
      marca: data.marca,
      codigo: data.codigo,
      precio_unitario: data.precio_unitario,
      stock: data.stock,
      usuario_id: data.usuario_id,
      foto: data.foto,
    };

    // Petición
    const response = await api.put(`productos/${id}`, producto);

    // Mensaje de éxito
    toast.success(
      `Producto: ${response.data.nombre} actualizado correctamente.`
    );
  } catch (error) {
    handleError(error);
  }
};

// 5. PATCH - Cambiar estado de producto
export const cambiarEstadoProducto = async (id, { estado }) => {
  try {
    // Petición
    const response = await api.patch(`productos/cambiar-estado/${id}`, {
      estado,
    });

    // Mensaje de éxito
    toast.success(
      `Producto: ${response.data.nombre} ${
        estado ? 'activado' : 'desactivado'
      } correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 6. DELETE - Eliminar producto
export const deleteProducto = async (id) => {
  try {
    // Petición
    const response = await api.delete(`productos/${id}`);

    // Mensaje de éxito
    toast.success(`Producto: ${response.data.nombre} eliminado correctamente.`);
  } catch (error) {
    handleError(error);
  }
};
