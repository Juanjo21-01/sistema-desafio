import { NavLink } from 'react-router';
import { useAuthStore } from '../../store/authStore';
import { FaCartPlus, FaRegUser } from 'react-icons/fa6';
import { FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';
import { useCarritoStore } from '../../store/carritoStore';

export const Header = () => {
  // Usuario
  const usuario = useAuthStore((state) => state.profile);
  const logout = useAuthStore((state) => state.logout);

  // Store de carrito
  const { carrito, total, cantidad } = useCarritoStore();

  // Cerrar Sesión
  const cerrarSesion = () => {
    logout();
  };

  return (
    <header className="sticky top-0 z-50 navbar bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 px-4 py-2 shadow-lg">
      {/* Logo */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="btn btn-ghost hover:bg-rose-300/50 normal-case text-xl"
        >
          <div className="flex items-center gap-2">
            <img
              src="/img/fondo-tiendita.png"
              alt="Mi Tiendita Online"
              className="w-10 h-10 object-contain"
            />
            <span className="hidden md:block font-bold text-white">
              Mi<strong className="text-gray-800">Tiendita</strong>
            </span>
          </div>
        </NavLink>
      </div>

      <div className="flex-none gap-6">
        {/* Carrito */}
        {usuario.rol_id == 3 && (
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="indicator">
                <FaCartPlus className="h-5 w-5 text-white" />
                {cantidad > 0 && (
                  <span className="badge badge-warning badge-sm indicator-item animate-pulse font-bold">
                    {cantidad}
                  </span>
                )}
              </div>
            </button>

            <div
              tabIndex={0}
              className="mt-3 z-[1] card dropdown-content w-96 bg-base-200 shadow-2xl"
            >
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Mi Carrito</h3>
                  <span className="badge badge-warning">
                    {cantidad == 1 ? '1 Producto' : `${cantidad} Productos`}
                  </span>
                </div>

                {total == 0 ? (
                  <div className="text-center mt-4 flex flex-col items-center gap-2">
                    <FaCartPlus className="text-6xl text-gray-500" />
                    <p className="text-gray-500 mt-4">
                      Tu carrito de compras está vacío
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="divider my-0"></div>

                    {carrito.map((producto) => (
                      <div
                        key={producto.id}
                        className="flex items-center gap-4 py-2"
                      >
                        <div className="w-12 h-12">
                          <img
                            src="https://picsum.photos/200"
                            alt={producto.nombre}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{producto.nombre}</h4>
                          <p className="text-sm text-gray-600">
                            Cantidad: {producto.cantidad}
                          </p>
                        </div>
                        <span className="font-bold">
                          Q
                          {(
                            producto.precio_unitario * producto.cantidad
                          ).toFixed(2)}
                        </span>
                      </div>
                    ))}

                    <div className="divider my-0"></div>

                    <div className="flex justify-between items-center font-bold">
                      <span>Total:</span>
                      <span className="text-primary">Q{total.toFixed(2)}</span>
                    </div>
                  </>
                )}

                <div className="card-actions mt-4">
                  <NavLink to="/carrito" className="btn btn-warning btn-block">
                    Ver Carrito
                  </NavLink>
                  <NavLink
                    to="/inicio"
                    className="btn btn-ghost btn-block btn-sm underline"
                  >
                    Seguir Comprando
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Perfil */}
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost hover:bg-white/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Perfil de Usuario"
                  />
                </div>
              </div>
              <span className="hidden md:block font-semibold text-white">
                {usuario.nombres}
              </span>
            </div>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-200 rounded-box w-60"
          >
            <div className="px-4 py-3 border-b">
              <p className="font-bold">
                {usuario.nombres} {usuario.apellidos}
              </p>
              <p className="text-sm text-gray-600">{usuario.email}</p>
            </div>
            <li>
              <NavLink to="/perfil" className="flex items-center gap-2 mt-2">
                <FaRegUser className="text-primary" />
                Mi Perfil
              </NavLink>
            </li>
            {usuario.rol_id == 3 && (
              <li>
                <NavLink
                  to="/perfil/pedidos"
                  className="flex items-center gap-2 mt-1"
                >
                  <FaShoppingBag className="text-primary" />
                  Mis Pedidos
                </NavLink>
              </li>
            )}
            <div className="divider my-1"></div>
            <li>
              <button
                className="flex items-center gap-2 text-error hover:bg-error/10"
                onClick={cerrarSesion}
              >
                <FaSignOutAlt />
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
