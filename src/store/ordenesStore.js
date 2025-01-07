import { create } from 'zustand';
import { getOrdenes, getOrdenById } from '../helpers/api/ordenes';

export const useOrdenesStore = create((set) => ({
  ordenes: [],
  ordenesPendientes: [],
  isLoading: false,

  // Obtener todas las ordenes
  obtener: async () => {
    set({ isLoading: true });
    try {
      const ordenes = await getOrdenes();

      // Filtrar ordenes por estado
      const ordenesValidadas = ordenes.filter((orden) => orden.estado !== 'P');
      const ordenesSinDetalle = ordenes.filter((orden) => orden.estado === 'P');

      // Obtener detalles para cada orden pendiente
      const promesasDetalles = ordenesSinDetalle.map(async (orden) => {
        try {
          const detalle = await getOrdenById(orden.id);
          return {
            ...orden,
            detalle: detalle.detalle || [],
          };
        } catch (error) {
          console.error(
            `Error al obtener detalle de orden ${orden.id}:`,
            error
          );
          return {
            ...orden,
            detalle: [],
          };
        }
      });

      const ordenesPendientes = await Promise.all(promesasDetalles);

      set({
        ordenes: ordenesValidadas,
        ordenesPendientes,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error al obtener las ordenes', error);
      set({ isLoading: false });
    }
  },

  // ...resto del código
}));
