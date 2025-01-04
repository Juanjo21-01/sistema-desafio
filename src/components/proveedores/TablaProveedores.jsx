/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';

export const TablaProveedores = ({
  proveedores,
  onEditar,
  onEliminar,
  onEstado,
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase border-b-2  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="w-1/12">No.</th>
            <th className="w-3/12">Nombre</th>
            <th className="w-3/12">Dirección</th>
            <th className="w-1/12">NIT</th>
            <th className="w-1/12">Teléfono</th>
            <th className="w-1/12">Estado</th>
            <th className="w-2/12">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y dark:divide-gray-700">
          {proveedores.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center">
                No hay proveedores registrados
              </td>
            </tr>
          )}
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td className="font-semibold">{proveedor.id}</td>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.direccion}</td>
              <td>{proveedor.nit}</td>
              <td>{proveedor.telefono}</td>
              <td>
                <button
                  onClick={() => onEstado(proveedor)}
                  className={`btn btn-xs font-semibold leading-tight ${
                    proveedor.estado === 'Activo'
                      ? 'btn-success text-green-700 dark:text-green-100'
                      : 'btn-error text-red-700 dark:text-red-100'
                  }`}
                >
                  {proveedor.estado}
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <NavLink
                    to={`/proveedores/${proveedor.id}`}
                    className="btn btn-info btn-outline btn-sm font-semibold"
                  >
                    Ver
                  </NavLink>
                  <button
                    onClick={() => onEditar(proveedor)}
                    className="btn btn-warning btn-outline btn-sm font-semibold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onEliminar(proveedor)}
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
