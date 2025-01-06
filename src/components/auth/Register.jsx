import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from '../../validations/registerValidation';
import { registrar } from '../../helpers/api/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

export const Register = () => {
  // Variables de react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const navigate = useNavigate();

  // Enviar formulario
  const onSubmit = async (data) => {
    try {
      const response = await registrar(data);

      if (!response) return;

      setTimeout(() => {
        toast.success('¡Te has registrado correctamente!');
      }, 2000);

      navigate('/');
    } catch (error) {
      console.error('Error en la autenticación:', error);
    }
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
            placeholder="Ingresa tus nombres..."
            {...register('nombres')}
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
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
            placeholder="Ingresa tus apellidos..."
            {...register('apellidos')}
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
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
        {/* Correo Electrónico */}
        <div className="form-control w-full text-gray-700">
          <label htmlFor="email" className="label label-text text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            {...register('email')}
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
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
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
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
            placeholder="Ingresa tu dirección..."
            {...register('direccion')}
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
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
            placeholder="Ingresa tu teléfono..."
            {...register('telefono')}
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
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

      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
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
            required
            {...register('fecha_nacimiento')}
            className={`input input-sm input-bordered flex items-center gap-2 bg-transparent ${
              errors.fecha_nacimiento ? 'input-error' : 'input-success'
            }`}
          />
          {errors.fecha_nacimiento && (
            <span className="text-error text-sm mt-1">
              {errors.fecha_nacimiento.message}
            </span>
          )}
        </div>

        {/* Iniciar Sesión */}
        <button type="submit" className="btn btn-success w-full md:w-1/2">
          Crear Cuenta
        </button>
      </div>
    </form>
  );
};
