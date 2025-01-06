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

// PETICIONES DE ROLES

// 1. GET - Obtener roles
export const getRoles = async () => {
  try {
    // Petición
    const response = await api.get('roles');

    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 2. GET - Obtener rol por ID
export const getRoleById = async (id) => {
  try {
    // Petición
    const response = await api.get(`roles/${id}`);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};
