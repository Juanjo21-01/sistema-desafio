/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { tipoProductoValidation } from '../../validations/tipoProductoValidation';

export const FormularioTipoProducto = ({
  tipoProducto,
  onGuardar,
  onClose,
}) => {
  // Validación con react-hook-form y yup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(tipoProductoValidation),
    defaultValues: {
      nombre: tipoProducto?.nombre || '',
    },
  });

  // Resetear el formulario
  useEffect(() => {
    if (tipoProducto) {
      reset({
        nombre: tipoProducto.nombre,
      });
    }
  }, [tipoProducto, reset]);

  // Enviar formulario
  const onSubmit = (data) => {
    // Agregar el id del tipo de producto si existe
    if (tipoProducto) data.id = tipoProducto.id;

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
          <label htmlFor="nombre" className="label label-text font-semibold text-gray-700">
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
          {tipoProducto ? 'Actualizar Categoría' : 'Crear Categoría'}
        </button>
      </div>
    </form>
  );
};
