import { Outlet } from 'react-router';
import { Navegacion } from '../../components/navegacion/Navegacion';
import { Header } from '../../components/navegacion/Header';
import { useAuthStore } from '../../store/authStore';

const Layout = () => {
  // const rol = useAuthStore((state) => state.profile.rol);
  const rol = 1;

  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-screen">
        {/* Encabezado */}
        <Header />

        <div className="flex flex-1">
          {/* Navegación */}
          {rol <= 2 && <Navegacion />}

          {/* Contenido */}
          <main
            className={`flex-1 overflow-y-auto ${
              rol <= 2 ? 'p-4 md:p-6 lg:p-8' : 'p-4 md:p-8 lg:p-12'
            }`}
          >
            <div className="container mx-auto max-w-7xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
