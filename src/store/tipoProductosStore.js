import { create } from 'zustand';
import { getTipoProductos } from '../helpers/api/tipoProductos';

export const useTipoProductosStore = create((set) => ({
  tipoProductos: [],
  isLoading: false,

  // Obtener todos los tipo de productos
  obtener: async () => {
    set({ isLoading: true });
    try {
      const tipoProductos = await getTipoProductos();
      set({ tipoProductos, isLoading: false });
    } catch (error) {
      console.error('Error al obtener los tipoProductos', error);
      set({ isLoading: false });
    }
  },
}));
