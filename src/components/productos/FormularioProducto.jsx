/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productoValidation } from '../../validations/productoValidation';

export const FormularioProducto = ({ producto, onGuardar, onClose }) => {
  // Validación con react-hook-form y yup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productoValidation),
    defaultValues: {
      nombre: producto?.nombre || '',
      tipo_producto_id: producto?.tipo_producto_id || '',
      marca: producto?.marca || '',
      codigo: producto?.codigo || '',
      precio_unitario: producto?.precio_unitario || '',
      stock: producto?.stock || '',
      foto: producto?.foto || '',
    },
  });

  // Resetear el formulario
  useEffect(() => {
    if (producto) {
      reset({
        nombre: producto.nombre,
        tipo_producto_id: producto.tipo_producto_id,
        marca: producto.marca,
        codigo: producto.codigo,
        precio_unitario: producto.precio_unitario,
        stock: producto.stock,
        foto: producto.foto,
      });
    }
  }, [producto, reset]);

  // Enviar formulario
  const onSubmit = (data) => {
    // Agregar el id del tipo de producto si existe
    if (producto) data.id = producto.id;

    onGuardar(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg p-4 bg-white/20 backdrop-blur-lg rounded-lg shadow-md border border-gray-400"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        {/* Nombre */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="nombre"
            className="label label-text font-semibold text-gray-700"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa el nombre..."
            {...register('nombre')}
            className={`input input-sm input-bordered bg-transparent placeholder-gray-500 ${
              errors.nombre ? 'input-error' : 'input-success'
            }`}
          />
          {errors.nombre && (
            <span className="text-error text-sm mt-1">
              {errors.nombre.message}
            </span>
          )}
        </div>

        {/* Tipo de producto */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="tipo_producto_id"
            className="label label-text font-semibold text-gray-700"
          >
            Tipo de producto
          </label>
          <select
            id="tipo_producto_id"
            {...register('tipo_producto_id')}
            className={`select select-bordered select-sm bg-transparent text-gray-500 ${
              errors.tipo_producto_id ? 'select-error' : 'select-success'
            }`}
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            <option value="1">Tipo 1</option>
            <option value="2">Tipo 2</option>
            <option value="3">Tipo 3</option>
          </select>
          {errors.tipo_producto_id && (
            <span className="text-error text-sm mt-1">
              {errors.tipo_producto_id.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        {/* Marca */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="marca"
            className="label label-text font-semibold text-gray-700"
          >
            Marca
          </label>
          <input
            id="marca"
            type="text"
            placeholder="Ingresa la marca..."
            {...register('marca')}
            className={`input input-sm input-bordered bg-transparent placeholder-gray-500 ${
              errors.marca ? 'input-error' : 'input-success'
            }`}
          />
          {errors.marca && (
            <span className="text-error text-sm mt-1">
              {errors.marca.message}
            </span>
          )}
        </div>

        {/* Código */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="codigo"
            className="label label-text font-semibold text-gray-700"
          >
            Código
          </label>
          <input
            id="codigo"
            type="text"
            placeholder="Ingresa el código..."
            {...register('codigo')}
            className={`input input-sm input-bordered bg-transparent placeholder-gray-500 ${
              errors.codigo ? 'input-error' : 'input-success'
            }`}
          />
          {errors.codigo && (
            <span className="text-error text-sm mt-1">
              {errors.codigo.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        {/* Precio unitario */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="precio_unitario"
            className="label label-text font-semibold text-gray-700"
          >
            Precio unitario
          </label>
          <input
            id="precio_unitario"
            type="number"
            placeholder="Ingresa el precio..."
            {...register('precio_unitario')}
            className={`input input-sm input-bordered bg-transparent placeholder-gray-500 ${
              errors.precio_unitario ? 'input-error' : 'input-success'
            }`}
          />
          {errors.precio_unitario && (
            <span className="text-error text-sm mt-1">
              {errors.precio_unitario.message}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="stock"
            className="label label-text font-semibold text-gray-700"
          >
            Stock
          </label>
          <input
            id="stock"
            type="number"
            placeholder="Ingresa el stock..."
            {...register('stock')}
            className={`input input-sm input-bordered bg-transparent placeholder-gray-500 ${
              errors.stock ? 'input-error' : 'input-success'
            }`}
          />
          {errors.stock && (
            <span className="text-error text-sm mt-1">
              {errors.stock.message}
            </span>
          )}
        </div>
      </div>

      <div className="form-control w-full text-gray-700">
        <label
          htmlFor="foto"
          className="label label-text font-semibold text-gray-700"
        >
          Foto
        </label>
        <input
          id="foto"
          type="file"
          required
          {...register('foto')}
          className="file-input file-input-bordered file-input-sm bg-transparent text-gray-500 file-input-success"
        />
      </div>

      <div className="modal-action gap-2">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-sm btn-error btn-outline"
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn-sm btn-success text-white">
          {producto ? 'Actualizar Producto' : 'Crear Producto'}
        </button>
      </div>
    </form>
  );
};
