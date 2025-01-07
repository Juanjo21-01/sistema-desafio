import { useNavigate } from 'react-router';
import { FaShoppingBag } from 'react-icons/fa';
import { useCarritoStore } from '../../store/carritoStore';
import { registerOrden } from '../../helpers/api/ordenes';
import { useAuthStore } from '../../store/authStore';

export const DatosCheckout = () => {
  const navigate = useNavigate();

  // Store de carrito
  const { carrito, total, vaciarCarrito } = useCarritoStore();

  // Usuario autenticado
  const { profile } = useAuthStore();

  const confirmarCompra = async () => {
    // Detalle de la orden
    const detalles = carrito.map((item) => ({
      producto_id: item.id,
      cantidad: item.cantidad,
      precio_unitario: item.precio_unitario.toFixed(2),
    }));

    const orden = {
      fecha_orden: new Date().toISOString().slice(0, 10),
      cliente_id: profile.id,
      detalles,
    };

    await registerOrden(orden);

    // Vaciar carrito
    vaciarCarrito();

    navigate('/inicio');
  };

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        {/* Encabezado */}
        <h2 className="card-title flex items-center gap-2 mb-6">
          <FaShoppingBag className="text-primary" />
          Confirmar Pedido
        </h2>

        {/* Lista de Productos */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 border-b-2 dark:border-gray-700 dark:text-gray-400">
                <th className="w-6/12">Producto</th>
                <th className="w-2/12">Cantidad</th>
                <th className="w-2/12">Precio</th>
                <th className="w-2/12">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-700 text-center">
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.cantidad}</td>
                  <td>Q{item.precio_unitario.toFixed(2)}</td>
                  <td>Q{(item.precio_unitario * item.cantidad).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resumen */}
        <div className="divider mb-0">Detalle</div>
        <div className="flex justify-end">
          <div className="text-right w-64">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">Q{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="card-actions justify-center mt-4 gap-4">
          <button
            className="btn btn-neutral btn-outline"
            onClick={() => navigate('/carrito')}
          >
            Volver
          </button>
          <button className="btn btn-primary" onClick={confirmarCompra}>
            Confirmar Orden
          </button>
        </div>
      </div>
    </div>
  );
};
