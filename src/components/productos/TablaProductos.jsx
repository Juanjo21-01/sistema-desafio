/* eslint-disable react/prop-types */
import { NavLink } from 'react-router';

export const TablaProductos = ({
  productos,
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
            <th className="w-2/12">Categoria</th>
            <th className="w-2/12">Nombre</th>
            <th className="w-2/12">Marca</th>
            <th className="w-1/12">Precio</th>
            <th className="w-1/12">Stock</th>
            <th className="w-1/12">Estado</th>
            <th className="w-2/12">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y dark:divide-gray-700">
          {productos.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center">
                No hay productos registrados
              </td>
            </tr>
          )}
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td className="font-semibold">{producto.id}</td>
              <td>{producto.tipo_producto_id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.marca}</td>
              <td>{producto.precio_unitario}</td>
              <td>{producto.stock}</td>
              <td>
                <button
                  onClick={() => onEstado(producto)}
                  className={`btn btn-xs font-semibold leading-tight ${
                    producto.estado === 'Activo'
                      ? 'btn-success text-green-700 dark:text-green-100'
                      : 'btn-error text-red-700 dark:text-red-100'
                  }`}
                >
                  {producto.estado}
                </button>
              </td>
              <td>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <NavLink
                    to={`/productos/${producto.id}`}
                    className="btn btn-info btn-outline btn-sm font-semibold"
                  >
                    Ver
                  </NavLink>
                  <button
                    onClick={() => onEditar(producto)}
                    className="btn btn-warning btn-outline btn-sm font-semibold"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onEliminar(producto)}
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
