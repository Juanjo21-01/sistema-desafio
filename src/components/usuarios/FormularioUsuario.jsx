/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usuarioValidation } from '../../validations/usuarioValidation';

export const FormularioUsuario = ({ usuario, onGuardar, onClose }) => {
  // Validación con react-hook-form y yup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(usuarioValidation),
    defaultValues: {
      nombres: usuario?.nombres || '',
      apellidos: usuario?.apellidos || '',
      email: usuario?.email || '',
      direccion: usuario?.direccion || '',
      telefono: usuario?.telefono || '',
      fecha_nacimiento: usuario?.fecha_nacimiento || '',
      rol_id: usuario?.rol_id || '',
    },
  });

  // Resetear el formulario
  useEffect(() => {
    if (usuario) {
      reset({
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        email: usuario.email,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        fecha_nacimiento: usuario.fecha_nacimiento,
        rol_id: usuario.rol_id,
      });
    }
  }, [usuario, reset]);

  // Enviar formulario
  const onSubmit = (data) => {
    // Agregar el id del usuario si existe
    if (usuario) data.id = usuario.id;

    onGuardar(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg p-4 bg-white/20 backdrop-blur-lg rounded-lg shadow-md border border-gray-400"
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        {/* Nombres */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="nombres" className="label label-text text-gray-700">
            Nombres
          </label>
          <input
            id="nombres"
            type="text"
            placeholder="Ingresa los nombres..."
            {...register('nombres')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.nombres ? 'input-error' : 'input-success'
            }`}
          />
          {errors.nombres && (
            <span className="text-error text-sm mt-1">
              {errors.nombres.message}
            </span>
          )}
        </div>

        {/* Apellidos */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="apellidos" className="label label-text text-gray-700">
            Apellidos
          </label>
          <input
            id="apellidos"
            type="text"
            placeholder="Ingresa los apellidos..."
            {...register('apellidos')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.apellidos ? 'input-error' : 'input-success'
            }`}
          />
          {errors.apellidos && (
            <span className="text-error text-sm mt-1">
              {errors.apellidos.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        {/* Email */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="email" className="label label-text text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            {...register('email')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.email ? 'input-error' : 'input-success'
            }`}
          />
          {errors.email && (
            <span className="text-error text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Contraseña */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="password" className="label label-text text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register('password')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.password ? 'input-error' : 'input-success'
            }`}
          />
          {errors.password && (
            <span className="text-error text-sm mt-1">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
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

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        {/* Fecha de Nacimiento */}
        <div className="form-control w-full text-gray-700">
          <label
            htmlFor="fecha_nacimiento"
            className="label label-text text-gray-700"
          >
            Fecha de Nacimiento
          </label>
          <input
            id="fecha_nacimiento"
            type="date"
            {...register('fecha_nacimiento')}
            className={`input input-sm input-bordered bg-transparent ${
              errors.fecha_nacimiento ? 'input-error' : 'input-success'
            }`}
          />
          {errors.fecha_nacimiento && (
            <span className="text-error text-sm mt-1">
              {errors.fecha_nacimiento.message}
            </span>
          )}
        </div>

        {/* Rol */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="rol_id" className="label label-text text-gray-700">
            Rol
          </label>
          <select
            id="rol_id"
            {...register('rol_id')}
            className={`select select-sm select-bordered bg-transparent ${
              errors.rol_id ? 'select-error' : 'select-success'
            }`}
          >
            <option value="0" disabled>
              Selecciona un rol
            </option>
            <option value="2">Empleado</option>
            <option value="3">Cliente</option>
          </select>
          {errors.rol_id && (
            <span className="text-error text-sm mt-1">
              {errors.rol_id.message}
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
          {usuario ? 'Actualizar Usuario' : 'Crear Usuario'}
        </button>
      </div>
    </form>
  );
};
