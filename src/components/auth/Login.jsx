import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from '../../validations/loginValidation';
import { IoIosMail } from 'react-icons/io';
import { FaKey } from 'react-icons/fa';
import { login } from '../../helpers/api/auth';
import { useAuthStore } from '../../store/authStore';

export const Login = () => {
  // Variables de react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  // Enviar formulario
  const onSubmit = async (data) => {
    try {
      const response = await login(data);

      if (!response) return;

      setToken(response.access_token);
      setProfile(response.usuario);
    } catch (error) {
      console.error('Error en la autenticación:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md p-6 bg-white/20 backdrop-blur-lg rounded-lg shadow-md border border-gray-400"
    >
      {/* Correo Electrónico */}
      <div className="form-control w-full mb-4 text-gray-700">
        <label htmlFor="email" className="label label-text text-gray-700">
          Correo Electrónico
        </label>
        <span
          className={`input input-bordered flex items-center gap-2 bg-transparent ${
            errors.email ? 'input-error' : 'input-success'
          }`}
        >
          <IoIosMail className="h-5 w-5 opacity-70" />
          <input
            id="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            {...register('email')}
            className="grow"
          />
        </span>
        {errors.email && (
          <span className="text-error text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Contraseña */}
      <div className="form-control w-full mb-4 text-gray-700">
        <label htmlFor="password" className="label label-text text-gray-700">
          Contraseña
        </label>
        <span
          className={`input input-bordered flex items-center gap-2 bg-transparent ${
            errors.password ? 'input-error' : 'input-success'
          }`}
        >
          <FaKey className="h-4 w-4 opacity-70" />
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register('password')}
            className="grow"
          />
        </span>
        {errors.password && (
          <span className="text-error text-sm mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Iniciar Sesión */}
      <button type="submit" className="btn btn-primary  w-full">
        Iniciar Sesión
      </button>
    </form>
  );
};
