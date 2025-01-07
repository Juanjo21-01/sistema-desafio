/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';

export const TablaUsuarios = ({ usuarios, onEditar, onEliminar, onEstado }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 uppercase border-b-2  dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="w-1/12">No.</th>
            <th className="w-4/12">Nombres</th>
            <th className="w-2/12">Email</th>
            <th className="w-1/12">Teléfono</th>
            <th className="w-1/12">Rol</th>
            <th className="w-1/12">Estado</th>
            <th className="w-2/12">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y dark:divide-gray-700 text-center">
          {usuarios.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center">
                No hay usuarios registrados
              </td>
            </tr>
          )}
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className="font-semibold">{usuario.id}</td>
              <td>
                {usuario.nombres} {usuario.apellidos}
              </td>
              <td>{usuario.email}</td>
              <td>{usuario.telefono}</td>
              <td>
                {usuario.rol_id === 1
                  ? 'Administrador'
                  : usuario.rol_id === 2
                  ? 'Empleado'
                  : 'Cliente'}
              </td>
              <td>
                <button
                  onClick={() => onEstado(usuario)}
                  className={`btn btn-xs font-semibold leading-tight ${
                    usuario.estado
                      ? 'btn-success text-green-700 dark:text-green-100'
                      : 'btn-error text-red-700 dark:text-red-100'
                  }`}
                >
                  {usuario.estado ? 'Activo' : 'Inactivo'}
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <NavLink
                    to={`/usuarios/${usuario.id}`}
                    className="btn btn-info btn-outline btn-sm font-semibold"
                  >
                    Ver
                  </NavLink>
                  <button
                    onClick={() => onEditar(usuario)}
                    className="btn btn-warning btn-outline btn-sm font-semibold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onEliminar(usuario)}
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
