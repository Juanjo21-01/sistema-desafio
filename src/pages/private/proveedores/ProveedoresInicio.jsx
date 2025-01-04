import { useState } from 'react';
import { TablaProveedores } from '../../../components/proveedores/TablaProveedores';
import { ModalProveedor } from '../../../components/proveedores/ModalProveedor';
import { ModalProveedorEliminar } from '../../../components/proveedores/ModalProveedorEliminar';

function ProveedoresInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

  // Store de proveedores
  const proveedores = [
    {
      id: 1,
      nombre: 'Juan José',
      direccion: 'Ciudad de Guatemala, Guatemala',
      nit: '123456789',
      telefono: '1234567890',
      estado: 'Activo',
      rol: 'Administrador',
    },
    {
      id: 2,
      nombre: 'María Fernanda',
      direccion: 'Ciudad de Guatemala, Guatemala',
      nit: '987654321',
      telefono: '0987654321',
      estado: 'Inactivo',
      rol: 'Empleado',
    },
  ];

  // Modales
  const abrirModal = () => {
    setProveedorSeleccionado(null);
    setIsModalOpen(true);
  };

  const abrirModalEditar = (proveedor) => {
    setProveedorSeleccionado(proveedor);
    setIsModalOpen(true);
  };

  const abrirModalEliminar = (proveedor) => {
    setProveedorSeleccionado(proveedor);
    setIsModalEliminarOpen(true);
  };

  // Guardar o editar proveedor
  const guardarProveedor = (proveedor) => {
    if (proveedor.id) {
      // Editar
      console.log('Editar: ', proveedor);
    } else {
      // Crear
      console.log('Crear: ', proveedor);
    }

    setIsModalOpen(false);
  };

  // Cambiar estado de proveedor
  const cambiarEstado = (proveedor) => {
    console.log('Cambiar estado: ', proveedor);
  };

  // Eliminar proveedor
  const eliminarProveedor = () => {
    console.log('Eliminar: ', proveedorSeleccionado);

    setIsModalEliminarOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Proveedores</h1>

        {/* Crear */}
        <button className="btn btn-primary text-white" onClick={abrirModal}>
          Crear<span className="hidden sm:inline">Nuevo Proveedor</span>
        </button>
      </div>

      {/* Tabla */}
      <TablaProveedores
        proveedores={proveedores}
        onEditar={abrirModalEditar}
        onEliminar={abrirModalEliminar}
        onEstado={cambiarEstado}
      />

      {/* Modal  */}
      <ModalProveedor
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        proveedor={proveedorSeleccionado}
        onGuardar={guardarProveedor}
      />

      {/* Modal Eliminar */}
      <ModalProveedorEliminar
        isOpen={isModalEliminarOpen}
        onClose={() => setIsModalEliminarOpen(false)}
        onConfirm={eliminarProveedor}
      />
    </div>
  );
}

export default ProveedoresInicio;
