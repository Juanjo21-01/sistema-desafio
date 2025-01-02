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

// PETICIONES DE USUARIOS

// 1. GET - Obtener usuarios
export const getUsuarios = async () => {
  try {
    // Petición
    const response = await api.get('usuarios');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener usuario por ID
export const getUsuarioById = async (id) => {
  try {
    // Petición
    const response = await api.get(`usuarios/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 3. POST - Registrar usuario
export const registerUsuario = async (data) => {
  try {
    const usuario = {
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      password: data.password,
      direccion: data.direccion,
      telefono: data.telefono,
      fecha_nacimiento: data.fecha_nacimiento,
      rol_id: data.rol_id,
    };

    // Petición
    const response = await api.post('usuarios', usuario);

    // Mensaje de éxito
    toast.success(
      `Usuario: ${response.data.nombres} registrado correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 4. PUT - Actualizar usuario
export const updateUsuario = async (id, data) => {
  try {
    const usuario = {
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      password: data.password,
      direccion: data.direccion,
      telefono: data.telefono,
      fecha_nacimiento: data.fecha_nacimiento,
      rol_id: data.rol_id,
    };

    // Petición
    const response = await api.put(`usuarios/${id}`, usuario);

    // Mensaje de éxito
    toast.success(
      `Usuario: ${response.data.nombres} actualizado correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 5. PATCH - Cambiar estado de usuario
export const cambiarEstadoUsuario = async (id, { estado }) => {
  try {
    // Petición
    const response = await api.patch(`usuarios/cambiarEstado/${id}`, {
      estado,
    });

    // Mensaje de éxito
    toast.success(
      `Usuario: ${response.data.nombres} ${
        estado ? 'activado' : 'desactivado'
      } correctamente.`
    );

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 6. DELETE - Eliminar usuario
export const deleteUsuario = async (id) => {
  try {
    // Petición
    const response = await api.delete(`usuarios/${id}`);

    // Mensaje de éxito
    toast.success(`Usuario eliminado correctamente.`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};
