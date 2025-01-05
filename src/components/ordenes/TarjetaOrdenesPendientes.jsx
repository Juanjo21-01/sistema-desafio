/* eslint-disable react/prop-types */
import {
  FaCalendar,
  FaUser,
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';

export const TarjetasOrdenesPendientes = ({
  ordenes,
  onValidar,
  onRechazar,
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        {ordenes.length === 0 && (
          <div className="card bg-base-200 p-4 text-center shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl md:text-4xl text-primary">
                No hay órdenes pendientes
              </h2>
              <p className="text-gray-500">
                Todas las órdenes han sido validadas o rechazadas.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {ordenes.map((orden) => (
          <div
            key={orden.id}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="card-body px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title text-primary">Orden #{orden.id}.</h2>
                <div className="badge badge-warning">Pendiente</div>
              </div>

              {/* Información Principal */}
              <div className="space-y-2 flex flex-col sm:flex-row justify-start sm:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="font-medium">{orden.fecha_orden}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FaUser className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Cliente</p>
                    <p className="font-medium">{orden.cliente_id}</p>
                  </div>
                </div>
              </div>

              <hr className="divider my-1" />

              {/* Productos */}
              <div className="mb-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaShoppingCart className="text-primary" />
                  <h3 className="font-semibold">Detalle de Productos</h3>
                </div>
                <div className="bg-base-100 rounded-lg px-3 py-2">
                  {orden.detalle.map((producto) => (
                    <div
                      key={producto.id}
                      className="flex justify-between items-center py-1 border-b last:border-0 border-base-300 text-center"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{producto.nombre}</p>
                        <p className="text-sm text-gray-500">
                          {producto.cantidad} unidades
                        </p>
                      </div>
                      <p className="font-semibold">
                        Q{(producto.cantidad * producto.precio).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center border-t border-base-300 mb-2">
                <span className="text-gray-400">Total</span>
                <span className="text-lg font-bold text-primary">
                  Q
                  {orden.detalle
                    .reduce((sum, prod) => sum + prod.cantidad * prod.precio, 0)
                    .toFixed(2)}
                </span>
              </div>

              {/* Acciones */}
              <div className="card-actions justify-between">
                <button
                  onClick={() => onValidar(orden)}
                  className="btn btn-success btn-sm gap-2 flex-1 text-white"
                >
                  <FaCheckCircle />
                  Validar
                </button>
                <button
                  onClick={() => onRechazar(orden)}
                  className="btn btn-error btn-sm gap-2 flex-1 text-white"
                >
                  <FaTimesCircle />
                  Rechazar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
