import { create } from 'zustand';
import { getCompras } from '../helpers/api/compras';

export const useComprasStore = create((set) => ({
  compras: [],
  isLoading: false,

  // Obtener todas las compras
  obtener: async () => {
    set({ isLoading: true });
    try {
      const compras = await getCompras();
      set({ compras, isLoading: false });
    } catch (error) {
      console.error('Error al obtener las compras', error);
      set({ isLoading: false });
    }
  },
}));
