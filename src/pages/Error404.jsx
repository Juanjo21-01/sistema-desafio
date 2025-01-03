import { NavLink } from 'react-router';
import { Loader } from '../components/Loader';

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-base-content">
      <h1 className="text-9xl font-bold text-center mb-4 text-rose-500">404</h1>
      <p className="text-xl text-center mb-6 font-semibold">
        Página no encontrada
      </p>
      <div className="mb-8">
        <Loader />
      </div>
      <NavLink to="/" className="btn btn-warning ">
        Regresar
      </NavLink>
    </div>
  );
}

export default Error404;
