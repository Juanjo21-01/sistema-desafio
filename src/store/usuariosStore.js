import { create } from 'zustand';
import { getUsuarios } from '../helpers/api/usuarios';

export const useUsuariosStore = create((set) => ({
  usuarios: [],
  isLoading: false,

  // Obtener todos los usuarios
  obtener: async () => {
    set({ isLoading: true });
    try {
      const usuarios = await getUsuarios();
      set({ usuarios, isLoading: false });
    } catch (error) {
      console.error('Error al obtener los usuarios', error);
      set({ isLoading: false });
    }
  },
}));
