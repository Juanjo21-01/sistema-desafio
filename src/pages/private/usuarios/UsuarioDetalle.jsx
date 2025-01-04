import { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUserTag,
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router';
import { ModalUsuario } from '../../../components/usuarios/ModalUsuario';

function UsuariosDetalle() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const usuario = {
    id: id,
    nombres: 'Juan José',
    apellidos: 'Pérez González',
    email: 'juan@example.com',
    telefono: '12345678',
    direccion: 'Ciudad de Guatemala, Guatemala',
    fecha_nacimiento: '1990-01-01',
    rol_id: 1,
    estado: true,
  };

  // Modal
  const abrirModalEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setIsModalOpen(true);
  };

  // Editar usuario
  const editarUsuario = (usuario) => {
    if (usuario.id) {
      // Editar
      console.log('Editar: ', usuario);
    } else {
      // Crear
      return console.error('No se puede crear un usuario desde aquí');
    }

    setIsModalOpen(false);
  };

  return (
    <div className="card bg-base-200 shadow-xl p-4">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <FaUser className="w-full h-full p-4 bg-primary/10 text-primary" />
              </div>
            </div>
            <div
              className={`badge badge-lg font-semibold leading-tight badge-${
                usuario.estado
                  ? 'success text-green-700 dark:text-green-100'
                  : 'error text-red-700 dark:text-red-100'
              }`}
            >
              {usuario.estado ? 'Activo' : 'Inactivo'}
            </div>
          </div>

          {/* Información Principal */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              {usuario.nombres} {usuario.apellidos}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{usuario.email}</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p>{usuario.telefono}</p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Dirección</p>
                  <p>{usuario.direccion}</p>
                </div>
              </div>

              {/* Fecha de Nacimiento */}
              <div className="flex items-center gap-2">
                <FaBirthdayCake className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Fecha de Nacimiento</p>
                  <p>{usuario.fecha_nacimiento}</p>
                </div>
              </div>

              {/* Rol */}
              <div className="flex items-center gap-2">
                <FaUserTag className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Rol</p>
                  <p>
                    {usuario.rol_id === 1
                      ? 'Administrador'
                      : usuario.rol_id === 2
                      ? 'Staff'
                      : 'Cliente'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="card-actions justify-end gap-4">
          <button
            onClick={() => navigate('/usuarios')}
            className="btn btn-neutral btn-outline"
          >
            Volver
          </button>
          <button
            onClick={() => abrirModalEditar(usuario)}
            className="btn btn-warning text-white"
          >
            Editar Usuario
          </button>
        </div>
      </div>

      {/* Modal  */}
      <ModalUsuario
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        usuario={usuarioSeleccionado}
        onGuardar={editarUsuario}
      />
    </div>
  );
}

export default UsuariosDetalle;