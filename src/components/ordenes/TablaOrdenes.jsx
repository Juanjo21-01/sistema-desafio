/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';

export const TablaOrdenes = ({ ordenes, onEstado }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase border-b-2  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="w-1/12">No.</th>
            <th className="w-2/12">Fecha</th>
            <th className="w-3/12">Cliente</th>
            <th className="w-2/12">Cantidad</th>
            <th className="w-1/12">Estado</th>
            <th className="w-3/12">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y dark:divide-gray-700 text-center">
          {ordenes.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No hay órdenes registradas
              </td>
            </tr>
          )}
          {ordenes.map((orden) => (
            <tr key={orden.id}>
              <td className="font-semibold">{orden.id}</td>
              <td>{orden.fecha_orden}</td>
              <td>{orden.cliente_id}</td>
              <td>{orden.cantidad_productos}</td>
              <td>
                <span
                  className={`badge badge-md font-bold text-white ${
                    orden.estado === 'V' ? 'badge-success' : 'badge-error'
                  }`}
                >
                  {orden.estado === 'V' ? 'VALIDADA' : 'RECHAZADA'}
                </span>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <NavLink
                    to={`/ordenes/${orden.id}`}
                    className="btn btn-info btn-outline btn-sm font-semibold"
                  >
                    Ver
                  </NavLink>

                  <button
                    onClick={() => onEstado(orden)}
                    className="btn btn-warning btn-outline btn-sm font-semibold"
                  >
                    Cambiar estado
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
