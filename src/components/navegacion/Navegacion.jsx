import { NavLink } from 'react-router';
import { useAuthStore } from '../../store/authStore';
import {
  FaHome,
  FaUsers,
  FaBoxes,
  FaShoppingCart,
  FaTruck,
  FaStore,
  FaClipboardList,
  FaThList,
  FaUserCircle,
} from 'react-icons/fa';

export const Navegacion = () => {
  // Usuario
  const usuario = useAuthStore((state) => state.profile);

  return (
    <aside className="bg-base-200 sm:w-40 md:w-56 lg:w-72 shadow-xl hidden sm:block">
      <div className="sticky top-0 sm:p-4 lg:p-6">
        {/* Perfil */}
        <NavLink
          to="/perfil"
          className="block rounded-lg hover:bg-base-100 hover:shadow-md transition-all duration-200 mb-3 px-2"
        >
          <div className="flex items-center gap-3 ">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <FaUserCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold">{usuario.nombres}</h3>
              <p className="text-sm text-gray-600">
                {usuario.rol_id == 1 ? 'Administrador' : 'Cliente'}
              </p>
            </div>
          </div>
        </NavLink>

        <nav className="space-y-2">
          {/* Inicio */}
          <ul className="menu bg-base-100 w-full rounded-box p-2 shadow-md">
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white font-medium shadow-md'
                      : 'hover:bg-base-200'
                  }`
                }
              >
                <FaHome className="w-5 h-5" />
                <span className="hidden md:inline-block">Inicio</span>
              </NavLink>
            </li>
          </ul>

          {usuario.rol_id <= 2 && (
            <>
              <div className="divider my-4 text-sm font-medium">
                ADMINISTRACIÓN
              </div>
              <ul className="menu bg-base-100 w-full rounded-box p-2 shadow-md space-y-1">
                {/* Usuarios */}
                <li>
                  <NavLink
                    to="/usuarios"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaUsers className="w-5 h-5" />
                    <span className="hidden md:inline-block">Usuarios</span>
                  </NavLink>
                </li>
                {/* Productos */}
                <li>
                  <NavLink
                    to="/productos"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaBoxes className="w-5 h-5" />
                    <span className="hidden md:inline-block">Productos</span>
                  </NavLink>
                </li>
                {/* Categorías */}
                <li>
                  <NavLink
                    to="/tipo-productos"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaThList className="w-5 h-5" />
                    <span className="hidden md:inline-block">Categorías</span>
                  </NavLink>
                </li>
                {/* Proveedores */}
                <li>
                  <NavLink
                    to="/proveedores"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaTruck className="w-5 h-5" />
                    <span className="hidden md:inline-block">Proveedores</span>
                  </NavLink>
                </li>
              </ul>

              <div className="divider my-4 text-sm font-medium">
                OPERACIONES
              </div>
              <ul className="menu bg-base-100 w-full rounded-box p-2 shadow-md space-y-1">
                {/* Compras */}
                <li>
                  <NavLink
                    to="/compras"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaStore className="w-5 h-5" />
                    <span className="hidden md:inline-block">Compras</span>
                  </NavLink>
                </li>
                {/* Ordenes */}
                <li>
                  <NavLink
                    to="/ordenes"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaShoppingCart className="w-5 h-5" />
                    <div className="hidden md:flex flex-1 items-center justify-between">
                      <span>Órdenes</span>
                      <span className="badge badge-primary badge-sm">3</span>
                    </div>
                  </NavLink>
                </li>
                {/* Reportes */}
                {/* <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white font-medium shadow-md'
                          : 'hover:bg-base-200'
                      }`
                    }
                  >
                    <FaClipboardList className="w-5 h-5" />
                    <span className="hidden md:inline-block">Reportes</span>
                  </NavLink>
                </li> */}
              </ul>
            </>
          )}
        </nav>
      </div>
    </aside>
  );
};
