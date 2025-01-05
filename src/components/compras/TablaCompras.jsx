/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';

export const TablaCompras = ({ compras, onEstado }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase border-b-2  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="w-1/12">No.</th>
            <th className="w-2/12">Fecha</th>
            <th className="w-3/12">Proveedor</th>
            <th className="w-2/12">Cantidad</th>
            <th className="w-1/12">Estado</th>
            <th className="w-3/12">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y dark:divide-gray-700 text-center">
          {compras.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No hay compras registrados
              </td>
            </tr>
          )}
          {compras.map((compra) => (
            <tr key={compra.id}>
              <td className="font-semibold">{compra.id}</td>
              <td>{compra.fecha_compra}</td>
              <td>{compra.proveedor_id}</td>
              <td>{compra.cantidad_productos}</td>
              <td>
                <button
                  onClick={() => onEstado(compra)}
                  className={`btn btn-xs font-semibold leading-tight ${
                    compra.estado === 'Activo'
                      ? 'btn-success text-green-700 dark:text-green-100'
                      : 'btn-error text-red-700 dark:text-red-100'
                  }`}
                >
                  {compra.estado}
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <NavLink
                    to={`/compras/${compra.id}`}
                    className="btn btn-info btn-outline btn-sm font-semibold"
                  >
                    Ver
                  </NavLink>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
