/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';

export const TablaTipoProductos = ({
  tipoProductos,
  onEditar,
  onEliminar,
  onEstado,
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase border-b-2  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="w-2/12">No.</th>
            <th className="w-4/12">Nombre</th>
            <th className="w-2/12">Estado</th>
            <th className="w-4/12">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y dark:divide-gray-700 text-center">
          {tipoProductos.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No hay tipo de productos registrados
              </td>
            </tr>
          )}
          {tipoProductos.map((tipoProducto) => (
            <tr key={tipoProducto.id}>
              <td className="font-semibold">{tipoProducto.id}</td>
              <td>{tipoProducto.nombre}</td>
              <td>
                <button
                  onClick={() => onEstado(tipoProducto)}
                  className={`btn btn-xs font-semibold leading-tight ${
                    tipoProducto.estado
                      ? 'btn-success text-green-700 dark:text-green-100'
                      : 'btn-error text-red-700 dark:text-red-100'
                  }`}
                >
                  {tipoProducto.estado ? 'Activo' : 'Inactivo'}
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <NavLink
                    to={`/tipo-productos/${tipoProducto.id}`}
                    className="btn btn-info btn-outline btn-sm font-semibold"
                  >
                    Ver
                  </NavLink>
                  <button
                    onClick={() => onEditar(tipoProducto)}
                    className="btn btn-warning btn-outline btn-sm font-semibold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onEliminar(tipoProducto)}
                    className="btn btn-error btn-outline btn-sm font-semibold"
                  >
                    Eliminar
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
