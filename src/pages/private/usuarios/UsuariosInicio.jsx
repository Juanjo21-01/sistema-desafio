import { useEffect, useState } from 'react';
import { Loader } from '../../../components/Loader';
import { TablaUsuarios } from '../../../components/usuarios/TablaUsuarios';
import { ModalUsuario } from '../../../components/usuarios/ModalUsuario';
import { ModalUsuarioEliminar } from '../../../components/usuarios/ModalUsuarioEliminar';
import { useUsuariosStore } from '../../../store/usuariosStore';
import {
  registerUsuario,
  updateUsuario,
  cambiarEstadoUsuario,
  deleteUsuario,
} from '../../../helpers/api/usuarios';

function UsuariosInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  // Store de usuarios
  const { usuarios, obtener, isLoading } = useUsuariosStore();

  // Obtener usuarios
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Modales
  const abrirModal = () => {
    setUsuarioSeleccionado(null);
    setIsModalOpen(true);
  };

  const abrirModalEditar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setIsModalOpen(true);
  };

  const abrirModalEliminar = (usuario) => {
    setUsuarioSeleccionado(usuario);
    setIsModalEliminarOpen(true);
  };

  // Guardar o editar usuario
  const guardarUsuario = async (usuario) => {
    if (usuario.id) {
      // Editar
      await updateUsuario(usuario.id, usuario);
    } else {
      // Crear
      await registerUsuario(usuario);
    }

    setIsModalOpen(false);
    obtener();
  };

  // Cambiar estado de usuario
  const cambiarEstado = async (usuario) => {
    await cambiarEstadoUsuario(usuario.id, { estado: !usuario.estado });
    obtener();
  };

  // Eliminar usuario
  const eliminarUsuario = async () => {
    await deleteUsuario(usuarioSeleccionado.id);
    setIsModalEliminarOpen(false);
    obtener();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Usuarios</h1>

        {/* Crear */}
        <button className="btn btn-primary text-white" onClick={abrirModal}>
          Crear<span className="hidden sm:inline">Nuevo Usuario</span>
        </button>
      </div>

      {/* Tabla */}
      {isLoading ? (
        <Loader />
      ) : (
        <TablaUsuarios
          usuarios={usuarios}
          onEditar={abrirModalEditar}
          onEliminar={abrirModalEliminar}
          onEstado={cambiarEstado}
        />
      )}

      {/* Modal  */}
      <ModalUsuario
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        usuario={usuarioSeleccionado}
        onGuardar={guardarUsuario}
      />

      {/* Modal Eliminar */}
      <ModalUsuarioEliminar
        isOpen={isModalEliminarOpen}
        onClose={() => setIsModalEliminarOpen(false)}
        onConfirm={eliminarUsuario}
      />
    </div>
  );
}

export default UsuariosInicio;
