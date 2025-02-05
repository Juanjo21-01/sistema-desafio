import { NavLink } from 'react-router';
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaShoppingBag,
  FaShoppingCart,
} from 'react-icons/fa';
import { useCarritoStore } from '../../store/carritoStore';

export const ResumenCarrito = () => {
  const { carrito, total, modificarCantidad, eliminarProducto } =
    useCarritoStore();

  if (carrito.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="bg-base-200 p-8 rounded-lg text-center max-w-md">
          <FaShoppingCart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-4">
            ¡Agrega algunos productos para comenzar!
          </p>
          <NavLink to="/inicio" className="btn btn-primary">
            <FaArrowLeft className="mr-2" /> Ir a Comprar
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Lista de Productos */}
      <div className="lg:col-span-2 space-y-2">
        {carrito.map((producto) => (
          <div key={producto.id} className="card bg-base-200 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center gap-4">
                {/* Imagen */}
                <img
                  src="https://picsum.photos/200"
                  alt={producto.nombre}
                  className="w-24 h-24 object-cover rounded-lg hidden lg:block"
                />

                {/* Información */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{producto.nombre}</h3>
                  <p className="text-primary font-semibold">
                    Q{producto.precio_unitario.toFixed(2)}
                  </p>

                  {/* Controles de Cantidad */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="btn btn-sm btn-circle btn-primary text-base-100"
                      onClick={() =>
                        modificarCantidad(producto.id, producto.cantidad - 1)
                      }
                      disabled={producto.cantidad <= 1}
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      className="input input-bordered input-sm w-14 text-center disabled:text-primary disabled:bg-base-300"
                      value={producto.cantidad}
                      min={1}
                      disabled
                    />
                    <button
                      className="btn btn-sm btn-circle btn-primary text-base-100"
                      onClick={() =>
                        modificarCantidad(producto.id, producto.cantidad + 1)
                      }
                      disabled={producto.cantidad >= producto.stock}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                {/* Subtotal y Acciones */}
                <div className="text-right">
                  <p className="font-semibold mb-2">
                    Q{(producto.precio_unitario * producto.cantidad).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-error btn-sm btn-outline"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen de Compra */}
      <div className="lg:col-span-1 my-5">
        <div className="card bg-base-200 shadow-lg sticky top-4">
          <div className="card-body">
            <h2 className="card-title">Resumen de Compra</h2>
            <div className="divider my-2"></div>

            {/* Detalles */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Q{total.toFixed(2)}</span>
              </div>
              <div className="divider my-2"></div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">Q{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Botones */}
            <div className="card-actions flex-col gap-2 mt-6">
              <NavLink to="/checkout" className="btn btn-primary w-full gap-2">
                <FaShoppingBag />
                Proceder a la Compra
              </NavLink>
              <NavLink
                to="/inicio"
                className="btn btn-ghost btn-sm w-full underline"
              >
                Seguir Comprando
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
