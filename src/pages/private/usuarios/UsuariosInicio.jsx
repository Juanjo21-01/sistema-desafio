import { useState } from 'react';
import { TablaUsuarios } from '../../../components/usuarios/TablaUsuarios';
import { ModalUsuario } from '../../../components/usuarios/ModalUsuario';
import { ModalUsuarioEliminar } from '../../../components/usuarios/ModalUsuarioEliminar';

function UsuariosInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  // Store de usuarios
  const usuarios = [
    {
      id: 1,
      nombres: 'Juan José',
      apellidos: 'Pérez',
      email: 'juanperez@gmail.com',
      telefono: '1234567890',
      estado: 'Activo',
      rol: 'Administrador',
    },
    {
      id: 2,
      nombres: 'María Fernanda',
      apellidos: 'López',
      email: 'maria@gmail.com',
      telefono: '0987654321',
      estado: 'Inactivo',
      rol: 'Empleado',
    },
  ];

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
  const guardarUsuario = (usuario) => {
    if (usuario.id) {
      // Editar
      console.log('Editar: ', usuario);
    } else {
      // Crear
      console.log('Crear: ', usuario);
    }

    setIsModalOpen(false);
  };

  // Cambiar estado de usuario
  const cambiarEstado = (usuario) => {
    console.log('Cambiar estado: ', usuario);
  };

  // Eliminar usuario
  const eliminarUsuario = () => {
    console.log('Eliminar: ', usuarioSeleccionado);

    setIsModalEliminarOpen(false);
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
      <TablaUsuarios
        usuarios={usuarios}
        onEditar={abrirModalEditar}
        onEliminar={abrirModalEliminar}
        onEstado={cambiarEstado}
      />

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
