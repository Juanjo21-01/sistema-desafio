import { NavLink } from 'react-router';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaShoppingBag,
} from 'react-icons/fa';
import { useAuthStore } from '../../../store/authStore';

function PerfilInicio() {
  // Usuario autenticado
  const { profile } = useAuthStore();

  return (
    <div className="px-4 py-2 space-y-4">
      {/* Tarjeta Personal */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-4">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <FaUser className="w-full h-full p-4 bg-primary/10 text-primary" />
                </div>
              </div>
            </div>

            {/* Información Personal */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">
                {profile.nombres} {profile.apellidos}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{profile.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="font-medium">{profile.telefono}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Dirección</p>
                    <p className="font-medium">{profile.direccion}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaBirthdayCake className="text-primary text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Fecha de Nacimiento</p>
                    <p className="font-medium">{profile.fecha_nacimiento}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Pedidos */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body px-2 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
            <h3 className="card-title">
              <FaShoppingBag className="text-primary" />
              Resumen de Pedidos
            </h3>
            <NavLink
              to="/perfil/pedidos"
              className="btn btn-primary text-white"
            >
              Ver Mis Pedidos
            </NavLink>
          </div>

          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat text-center">
              <div className="stat-title">Total Pedidos</div>
              <div className="stat-value text-2xl md:text-3xl">
                {profile.pedidos ? profile.pedidos : '2'}
              </div>
              <div className="stat-desc">Histórico de compras</div>
            </div>

            <div className="stat text-center">
              <div className="stat-title">Último Pedido</div>
              <div className="stat-value text-primary text-2xl md:text-3xl">
                {profile.ultimo_pedido ? profile.ultimo_pedido : '2025-01-05'}
              </div>
              <div className="stat-desc">Fecha de compra</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilInicio;
