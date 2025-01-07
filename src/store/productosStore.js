import { create } from 'zustand';
import { getProductos } from '../helpers/api/productos';

export const useProductosStore = create((set) => ({
  productos: [],
  isLoading: false,

  // Obtener todos los productos
  obtener: async () => {
    set({ isLoading: true });
    try {
      const productos = await getProductos();
      set({ productos, isLoading: false });
    } catch (error) {
      console.error('Error al obtener los productos', error);
      set({ isLoading: false });
    }
  },
}));
