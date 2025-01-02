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

// PETICIONES DE AUTENTICACIÓN

// 1. POST - Iniciar sesión
export const login = async ({ email, password }) => {
  try {
    // Petición
    const response = await api.post('auth/login', { email, password });

    // Mensaje de éxito
    toast.success('¡Bienvenido!');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. POST - Registrar cliente
export const register = async (data) => {
  try {
    const cliente = {
      nombres: data.nombres,
      apellidos: data.apellidos,
      email: data.email,
      password: data.password,
      direccion: data.direccion,
      telefono: data.telefono,
      fecha_nacimiento: data.fecha_nacimiento,
    };

    // Petición
    const response = await api.post('auth/register', cliente);

    // Mensaje de éxito
    toast.success('¡Te has registrado correctamente!');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};
