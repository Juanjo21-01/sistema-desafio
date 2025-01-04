/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { proveedorValidation } from '../../validations/proveedorValidation';

export const FormularioProveedor = ({ proveedor, onGuardar, onClose }) => {
  // Validación con react-hook-form y yup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(proveedorValidation),
    defaultValues: {
      nombre: proveedor?.nombre || '',
      direccion: proveedor?.direccion || '',
      nit: proveedor?.nit || '',
      telefono: proveedor?.telefono || '',
    },
  });

  // Resetear el formulario
  useEffect(() => {
    if (proveedor) {
      reset({
        nombre: proveedor.nombre,
        direccion: proveedor.direccion,
        nit: proveedor.nit,
        telefono: proveedor.telefono,
      });
    }
  }, [proveedor, reset]);

  // Enviar formulario
  const onSubmit = (data) => {
    // Agregar el id del proveedor si existe
    if (proveedor) data.id = proveedor.id;

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
          <label htmlFor="nombre" className="label label-text text-gray-700">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa el nombre..."
            {...register('nombre')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.nombre ? 'input-error' : 'input-success'
            }`}
          />
          {errors.nombre && (
            <span className="text-error text-sm mt-1">
              {errors.nombre.message}
            </span>
          )}
        </div>

        {/* Dirección */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="direccion" className="label label-text text-gray-700">
            Dirección
          </label>
          <input
            id="direccion"
            type="text"
            placeholder="Ingresa la dirección..."
            {...register('direccion')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.direccion ? 'input-error' : 'input-success'
            }`}
          />
          {errors.direccion && (
            <span className="text-error text-sm mt-1">
              {errors.direccion.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        {/* NIT */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="nit" className="label label-text text-gray-700">
            NIT
          </label>
          <input
            id="nit"
            type="text"
            placeholder="Ingresa el NIT..."
            {...register('nit')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.nit ? 'input-error' : 'input-success'
            }`}
          />
          {errors.nit && (
            <span className="text-error text-sm mt-1">
              {errors.nit.message}
            </span>
          )}
        </div>

        {/* Teléfono */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="telefono" className="label label-text text-gray-700">
            Teléfono
          </label>
          <input
            id="telefono"
            type="text"
            placeholder="Ingresa el teléfono..."
            {...register('telefono')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.telefono ? 'input-error' : 'input-success'
            }`}
          />
          {errors.telefono && (
            <span className="text-error text-sm mt-1">
              {errors.telefono.message}
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
          {proveedor ? 'Actualizar Proveedor' : 'Crear Proveedor'}
        </button>
      </div>
    </form>
  );
};
