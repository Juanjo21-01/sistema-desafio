import { NavLink } from 'react-router';
import { Register } from '../../components/auth/Register';
import { Toaster } from 'sonner';

function Registrarse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-300 via-yellow-300 to-green-300">
      <div className="container mx-auto px-6 md:px-8 py-12 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
          {/* Imagen */}
          <section className="hidden lg:flex flex-col items-center justify-center w-full lg:w-1/2 h-full">
            <img
              src="/img/fondo-tiendita.png"
              alt="Mi Tiendita Online"
              className="w-3/4 md:w-2/3 object-cover"
            />
          </section>

          {/* Formulario */}
          <section className="flex flex-col items-center justify-center gap-6 w-full lg:w-1/2 h-full p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-gray-700">
              Crear una cuenta
            </h1>

            <Register />

            <p className="text-sm text-center text-white dark:text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <NavLink to="/" className="text-blue-500 hover:underline">
                Inicia sesión
              </NavLink>
            </p>
          </section>
        </div>
      </div>

      {/* Notificaciones */}
      <Toaster visibleToasts={3} position="bottom-right" theme="system" />
    </div>
  );
}

export default Registrarse;
