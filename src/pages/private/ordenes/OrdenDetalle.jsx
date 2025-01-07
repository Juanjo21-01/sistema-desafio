import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  FaCalendar,
  FaUser,
  FaDollarSign,
  FaShoppingCart,
} from 'react-icons/fa';
import { getOrdenById } from '../../../helpers/api/ordenes';
import { Loader } from '../../../components/Loader';

function OrdenDetalle() {
  // Variables de estado
  const [orden, setOrden] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Orden
  useEffect(() => {
    getOrdenById(id).then((data) => setOrden(data));
  }, [id]);

  if (!orden) return <Loader />;

  return (
    <div className="px-4 py-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Detalle de Orden #{id}.</h1>
        <button
          onClick={() => navigate('/ordenes')}
          className="btn btn-neutral btn-outline"
        >
          Volver
        </button>
      </div>

      <hr className="divider" />

      <div className="card bg-base-200 shadow-xl mb-8">
        <div className="card-body">
          <div className="flex justify-end">
            <h2 className="card-title">
              Responsable de Orden:{' '}
              <span className="font-semibold text-primary">
                {orden.encargado.encargado_id.nombres || 'N/A'}
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-2">
            <div className="w-full flex justify-center items-center gap-3">
              <FaCalendar className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Fecha de Orden</p>
                <p className="font-semibold">{orden.fecha_orden}</p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-3">
              <FaUser className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Cliente</p>
                <p className="font-semibold">{orden.cliente_id.nombres}</p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-3">
              <div
                className={`badge badge-lg text-white ${
                  orden.estado === 'V'
                    ? 'badge-success'
                    : orden.estado === 'R'
                    ? 'badge-error'
                    : 'badge-warning'
                }`}
              >
                {orden.estado === 'V'
                  ? 'Validada'
                  : orden.estado === 'R'
                  ? 'Rechazada'
                  : 'Pendiente'}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-2 ">
            <div className="w-full">
              <p className="text-sm text-gray-500 mb-1">Observaciones</p>
              <p className="bg-base-100 p-3 rounded-lg">
                {orden.encargado.observaciones}
              </p>
            </div>
            <div className="w-full flex justify-end items-center gap-4">
              <FaDollarSign className="text-primary text-2xl" />
              <div className="text-right">
                <p className="text-sm text-gray-500">Total de la Orden</p>
                <p className="text-2xl font-bold text-primary">
                  Q
                  {orden.detalle
                    .reduce(
                      (sum, item) => sum + item.cantidad * item.precio_unitario,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detalle de Productos */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-lg mb-4">
            <FaShoppingCart className="text-primary" />
            Productos Ordenados
          </h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 border-b-2 dark:border-gray-700 dark:text-gray-400">
                  <th className="w-4/12">Producto</th>
                  <th className="w-2/12">Cantidad</th>
                  <th className="w-3/12">Precio Unitario</th>
                  <th className="w-3/12">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-gray-700 text-center">
                {orden.detalle.map((item) => (
                  <tr key={item.id}>
                    <td>{item.producto_id.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>Q{item.precio_unitario.toFixed(2)}</td>
                    <td>
                      Q{(item.cantidad * item.precio_unitario).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="text-center">
                <tr className="font-bold text-lg">
                  <td colSpan="3" className="text-right text-error">
                    Total:
                  </td>
                  <td className="text-error">
                    Q
                    {orden.detalle
                      .reduce(
                        (sum, item) =>
                          sum + item.cantidad * item.precio_unitario,
                        0
                      )
                      .toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdenDetalle;
