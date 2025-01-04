import { NavLink } from 'react-router';
import { Login } from '../../components/auth/Login';

function InicioSesion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-300 via-yellow-300 to-green-300">
      <div className="container mx-auto px-6 md:px-8 py-12 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
          {/* Imagen */}
          <section className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 h-full">
            <img
              src="/img/fondo-tiendita.png"
              alt="Mi Tiendita Online"
              className="w-3/4 md:w-2/3 object-cover"
            />
          </section>

          {/* Formulario */}
          <section className="flex flex-col items-center justify-center gap-8 w-full md:w-1/2 h-full p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-gray-700">
              Iniciar Sesión
            </h1>

            <Login />

            <p className="text-sm text-center text-white dark:text-gray-600">
              ¿No tienes una cuenta?{' '}
              <NavLink to="/register" className="text-blue-600 hover:underline">
                Regístrate
              </NavLink>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
