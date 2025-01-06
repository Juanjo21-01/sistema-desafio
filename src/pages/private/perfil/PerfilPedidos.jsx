import { useState } from 'react';
import { FaCalendar, FaShoppingCart, FaClock } from 'react-icons/fa';
import { NavLink } from 'react-router';

function PerfilPedidos() {
  const [pedidos] = useState([
    {
      id: 1,
      fecha_orden: '2024-03-15',
      estado: 'V',
      detalle: [
        { id: 1, nombre: 'Producto A', cantidad: 2, precio: 100 },
        { id: 2, nombre: 'Producto B', cantidad: 1, precio: 150 },
      ],
    },
    {
      id: 2,
      fecha_orden: '2024-03-14',
      estado: 'P',
      detalle: [{ id: 3, nombre: 'Producto C', cantidad: 3, precio: 75 }],
    },
  ]);

  return (
    <div className="px-4 py-0">
      <h1 className="text-2xl font-bold mb-4 text-center">Mis Pedidos</h1>

      <div className="flex justify-center items-center">
        {pedidos.length === 0 && (
          <div className="card bg-base-200 p-4 text-center shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl md:text-4xl text-primary">
                No hay pedidos realizados
              </h2>
              <p className="text-gray-500">
                Aún no has realizado ningún pedido en nuestra tienda.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="card bg-base-200 shadow-xl">
            <div className="card-body py-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="card-title text-primary">
                  Pedido #{pedido.id}.
                </h2>
                <div
                  className={`badge ${
                    pedido.estado === 'V'
                      ? 'badge-success'
                      : pedido.estado === 'R'
                      ? 'badge-error'
                      : 'badge-warning'
                  }`}
                >
                  {pedido.estado === 'V'
                    ? 'Entregado'
                    : pedido.estado === 'R'
                    ? 'Rechazado'
                    : 'En Proceso'}
                </div>
              </div>

              {/* Fechas */}
              <div className="flex items-center gap-2">
                <FaCalendar className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Fecha de Pedido</p>
                  <p className="font-medium">{pedido.fecha_orden}</p>
                </div>
              </div>

              <hr className="divider my-0" />

              {/* Productos */}
              <div className="mb-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaShoppingCart className="text-primary" />
                  <h3 className="font-semibold">Productos</h3>
                </div>
                <div className="bg-base-100 rounded-lg px-3 py-2">
                  {pedido.detalle.map((producto) => (
                    <div
                      key={producto.id}
                      className="flex justify-between items-center py-2 border-b last:border-0 border-base-300 text-center"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{producto.nombre}</p>
                        <p className="text-sm text-gray-500">
                          Cantidad: {producto.cantidad}
                        </p>
                      </div>
                      <p className="font-semibold">
                        Q{(producto.cantidad * producto.precio).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="divider my-0" />

              {/* Total */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Total del Pedido</span>
                <span className="text-xl font-bold text-primary">
                  Q
                  {pedido.detalle
                    .reduce((sum, item) => sum + item.cantidad * item.precio, 0)
                    .toFixed(2)}
                </span>
              </div>

              {/* Estado Actual */}
              {pedido.estado === 'P' && (
                <div className="flex items-center gap-2 mt-4 text-warning">
                  <FaClock />
                  <span className="text-sm">
                    Pedido en proceso de validación
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <NavLink to="/inicio" className="btn btn-primary">
          Volver al Inicio
        </NavLink>
      </div>
    </div>
  );
}

export default PerfilPedidos;
