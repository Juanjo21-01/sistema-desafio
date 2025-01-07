import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCarritoStore = create(
  persist(
    (set, get) => ({
      carrito: [],
      total: 0,
      cantidad: 0,

      // Agregar al carrito
      agregarProducto: (producto) => {
        const { carrito } = get();
        const productoExistente = carrito.find(
          (item) => item.id === producto.id
        );

        if (productoExistente) {
          // Actualizar cantidad si ya existe
          const nuevaCantidad = productoExistente.cantidad + producto.cantidad;

          // Validar stock
          if (nuevaCantidad > producto.stock) {
            return false;
          }

          set({
            carrito: carrito.map((item) =>
              item.id === producto.id
                ? { ...item, cantidad: nuevaCantidad }
                : item
            ),
          });
        } else {
          // Agregar nuevo producto
          set({
            carrito: [...carrito, producto],
          });
        }

        // Actualizar totales
        const { actualizarTotales } = get();
        actualizarTotales();
        return true;
      },

      // Modificar cantidad
      modificarCantidad: (id, cantidad) => {
        const { carrito } = get();
        const producto = carrito.find((item) => item.id === id);

        // Validar stock
        if (cantidad > producto.stock) {
          return false;
        }

        set({
          carrito: carrito.map((item) =>
            item.id === id ? { ...item, cantidad } : item
          ),
        });

        // Actualizar totales
        const { actualizarTotales } = get();
        actualizarTotales();
        return true;
      },

      // Eliminar producto
      eliminarProducto: (id) => {
        const { carrito } = get();
        set({
          carrito: carrito.filter((item) => item.id !== id),
        });

        // Actualizar totales
        const { actualizarTotales } = get();
        actualizarTotales();
      },

      // Vaciar carrito
      vaciarCarrito: () => {
        set({
          carrito: [],
          total: 0,
          cantidad: 0,
        });
      },

      // Actualizar totales
      actualizarTotales: () => {
        const { carrito } = get();
        const total = carrito.reduce(
          (sum, item) => sum + item.precio_unitario * item.cantidad,
          0
        );
        const cantidad = carrito.reduce((sum, item) => sum + item.cantidad, 0);

        set({
          total,
          cantidad,
        });
      },
    }),
    {
      name: 'carrito-storage',
    }
  )
);
