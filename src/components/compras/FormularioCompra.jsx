/* eslint-disable react/prop-types */
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { compraValidation } from '../../validations/compraValidation';
import { NavLink } from 'react-router';

export const FormularioCompra = ({ proveedores, productos, onGuardar }) => {
  // Validación con react-hook-form y yup
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(compraValidation),
    defaultValues: {
      fecha_compra: '',
      proveedor_id: '',
      observaciones: '',
      detalles: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'detalles',
  });

  // Detalle de Productos
  const agregarDetalle = (producto_id, cantidad, precio_unitario) => {
    if (!producto_id || cantidad <= 0 || precio_unitario <= 0) {
      alert('Todos los campos del producto deben ser válidos.');
      return;
    }

    append({ producto_id, cantidad, precio_unitario });

    document.getElementById('producto_id').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio_unitario').value = '';
  };

  // Enviar el formulario
  const onSubmit = (data) => onGuardar(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Detalles de Productos */}
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-lg mb-2">Seleccione los productos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
            <select
              id="producto_id"
              {...register('producto_id')}
              className="select select-bordered select-sm bg-transparent text-gray-500 w-full"
            >
              <option value="" disabled>
                Seleccione un producto
              </option>
              {productos.map((producto) => (
                <option key={producto.id} value={producto.id}>
                  {producto.id}. - {producto.nombre}
                </option>
              ))}
            </select>

            <input
              id="cantidad"
              type="number"
              className="input input-bordered input-sm bg-transparent placeholder-gray-500 w-full"
              placeholder="Cantidad"
            />

            <input
              id="precio_unitario"
              type="number"
              className="input input-bordered input-sm bg-transparent placeholder-gray-500 w-full"
              placeholder="Precio"
            />

            <button
              type="button"
              className="btn btn-primary btn-sm w-full text-white"
              onClick={() =>
                agregarDetalle(
                  document.getElementById('producto_id').value,
                  document.getElementById('cantidad').value,
                  document.getElementById('precio_unitario').value
                )
              }
            >
              Agregar Producto
            </button>
          </div>

          {/* Tabla de Productos */}
          {fields.length > 0 && (
            <div className="overflow-x-auto w-full">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-widest text-center text-gray-500 border-b-2 dark:border-gray-700 dark:text-gray-400">
                    <th className="w-2/12">Acciones</th>
                    <th className="w-4/12">Producto</th>
                    <th className="w-2/12">Cantidad</th>
                    <th className="w-2/12">Precio Unitario</th>
                    <th className="w-2/12">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700 text-center">
                  {fields.map((detalle, index) => (
                    <tr key={detalle.id}>
                      <td>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="btn btn-error btn-xs text-white"
                        >
                          Eliminar
                        </button>
                      </td>
                      <td>
                        {
                          productos.find(
                            (prod) => prod.id === detalle.producto_id
                          )?.nombre
                        }
                      </td>
                      <td>{detalle.cantidad}</td>
                      <td>Q{detalle.precio_unitario}</td>
                      <td>
                        Q
                        {(detalle.cantidad * detalle.precio_unitario).toFixed(
                          2
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td colSpan="4" className="text-right text-error">
                      Total:
                    </td>
                    <td className="text-error">
                      Q.
                      {fields
                        .reduce(
                          (sum, item) =>
                            sum + item.cantidad * item.precio_unitario,
                          0
                        )
                        .toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
            {/* Fecha de Compra */}
            <div className="form-control w-full">
              <label
                htmlFor="fecha_compra"
                className="label label-text font-semibold"
              >
                Fecha de Compra
              </label>
              <input
                id="fecha_compra"
                type="date"
                {...register('fecha_compra')}
                className={`input input-sm input-bordered bg-transparent placeholder-gray-500 ${
                  errors.fecha_compra ? 'input-error' : 'input-success'
                }`}
              />
              {errors.fecha_compra && (
                <span className="text-error text-sm mt-1">
                  {errors.fecha_compra.message}
                </span>
              )}
            </div>

            {/* Proveedor */}
            <div className="form-control w-full">
              <label
                htmlFor="proveedor_id"
                className="label label-text font-semibold"
              >
                Proveedor
              </label>
              <select
                id="proveedor_id"
                {...register('proveedor_id')}
                className={`select select-bordered select-sm bg-transparent text-gray-500 ${
                  errors.proveedor_id ? 'select-error' : 'select-success'
                }`}
              >
                <option value="" disabled>
                  Seleccione un proveedor
                </option>
                {proveedores.map((proveedor) => (
                  <option key={proveedor.id} value={proveedor.id}>
                    {proveedor.id}. - {proveedor.nombre}
                  </option>
                ))}
              </select>
              {errors.proveedor_id && (
                <span className="text-error text-sm mt-1">
                  {errors.proveedor_id.message}
                </span>
              )}
            </div>
          </div>

          {/* Observaciones */}
          <div className="form-control w-full">
            <label
              htmlFor="observaciones"
              className="label label-text font-semibold"
            >
              Observaciones
            </label>
            <textarea
              id="observaciones"
              {...register('observaciones')}
              className={`textarea textarea-bordered bg-transparent placeholder-gray-500 ${
                errors.observaciones ? 'textarea-error' : 'textarea-success'
              }`}
              placeholder="Ingresa las observaciones..."
            ></textarea>
            {errors.observaciones && (
              <span className="text-error text-sm mt-1">
                {errors.observaciones.message}
              </span>
            )}
          </div>

          <div className="flex justify-center mt-4 gap-4">
            <NavLink to="/compras" className="btn btn-error btn-outline">
              Cancelar
            </NavLink>
            <button type="submit" className="btn btn-success text-white">
              Registrar Compra
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
