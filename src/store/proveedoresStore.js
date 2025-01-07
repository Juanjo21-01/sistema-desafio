import { create } from 'zustand';
import { getProveedores } from '../helpers/api/proveedores';

export const useProveedoresStore = create((set) => ({
  proveedores: [],
  isLoading: false,

  // Obtener todos los proveedores
  obtener: async () => {
    set({ isLoading: true });
    try {
      const proveedores = await getProveedores();
      set({ proveedores, isLoading: false });
    } catch (error) {
      console.error('Error al obtener los proveedores', error);
      set({ isLoading: false });
    }
  },
}));
