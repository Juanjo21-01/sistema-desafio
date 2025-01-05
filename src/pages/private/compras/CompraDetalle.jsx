import { useNavigate, useParams } from 'react-router';
import { FaCalendar, FaTruck, FaBoxes, FaDollarSign } from 'react-icons/fa';

function CompraDetalle() {
  const navigate = useNavigate();
  const { id } = useParams();

  const compra = {
    id: 1,
    fecha_compra: '2024-03-15',
    proveedor: 'Proveedor A',
    observaciones: 'Compra mensual de productos',
    usuario: 'Usuario A',
    estado: true,
    detalles: [
      { id: 1, producto: 'Producto A', cantidad: 5, precio_unitario: 100 },
      { id: 2, producto: 'Producto B', cantidad: 3, precio_unitario: 150 },
      { id: 3, producto: 'Producto C', cantidad: 2, precio_unitario: 200 },
    ],
  };

  return (
    <div className="px-4 py-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Detalle de Compra #{id}.</h1>
        <button
          onClick={() => navigate('/compras')}
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
              Encargado:{' '}
              <span className="font-semibold text-primary">
                {compra.usuario}
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-2">
            <div className="w-full flex justify-center items-center gap-3">
              <FaCalendar className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Fecha de Compra</p>
                <p className="font-semibold">{compra.fecha_compra}</p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-3">
              <FaTruck className="text-primary text-xl" />
              <div>
                <p className="text-sm text-gray-500">Proveedor</p>
                <p className="font-semibold">{compra.proveedor}</p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-3">
              <div
                className={`badge badge-lg text-white ${
                  compra.estado ? 'badge-success' : 'badge-error'
                }`}
              >
                {compra.estado ? 'Validada' : 'Rechazada'}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-2 ">
            <div className="w-full">
              <p className="text-sm text-gray-500 mb-1">Observaciones</p>
              <p className="bg-base-100 p-3 rounded-lg">
                {compra.observaciones}
              </p>
            </div>
            <div className="w-full flex justify-end items-center gap-4">
              <FaDollarSign className="text-primary text-2xl" />
              <div className="text-right">
                <p className="text-sm text-gray-500">Total de la Compra</p>
                <p className="text-2xl font-bold text-primary">
                  Q
                  {compra.detalles
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
            <FaBoxes className="text-primary" />
            Productos Comprados
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
                {compra.detalles.map((detalle) => (
                  <tr key={detalle.id}>
                    <td>{detalle.producto}</td>
                    <td>{detalle.cantidad}</td>
                    <td>Q{detalle.precio_unitario.toFixed(2)}</td>
                    <td>
                      Q{(detalle.cantidad * detalle.precio_unitario).toFixed(2)}
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
                    {compra.detalles
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

export default CompraDetalle;
