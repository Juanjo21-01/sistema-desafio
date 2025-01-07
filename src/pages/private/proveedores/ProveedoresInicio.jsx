import { useEffect, useState } from 'react';
import { Loader } from '../../../components/Loader';
import { TablaProveedores } from '../../../components/proveedores/TablaProveedores';
import { ModalProveedor } from '../../../components/proveedores/ModalProveedor';
import { ModalProveedorEliminar } from '../../../components/proveedores/ModalProveedorEliminar';
import { useProveedoresStore } from '../../../store/proveedoresStore';
import {
  registerProveedor,
  updateProveedor,
  cambiarEstadoProveedor,
  deleteProveedor,
} from '../../../helpers/api/proveedores';

function ProveedoresInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

  // Store de proveedores
  const { proveedores, obtener, isLoading } = useProveedoresStore();

  // Obtener proveedores
  useEffect(() => {
    obtener();
  }, [obtener]);

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
  const guardarProveedor = async (proveedor) => {
    if (proveedor.id) {
      // Editar
      await updateProveedor(proveedor.id, proveedor);
    } else {
      // Crear
      await registerProveedor(proveedor);
    }

    setIsModalOpen(false);
    obtener();
  };

  // Cambiar estado de proveedor
  const cambiarEstado = async (proveedor) => {
    await cambiarEstadoProveedor(proveedor.id, { estado: !proveedor.estado });
    obtener();
  };

  // Eliminar proveedor
  const eliminarProveedor = async () => {
    await deleteProveedor(proveedorSeleccionado.id);
    setIsModalEliminarOpen(false);
    obtener();
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
      {isLoading ? (
        <Loader />
      ) : (
        <TablaProveedores
          proveedores={proveedores}
          onEditar={abrirModalEditar}
          onEliminar={abrirModalEliminar}
          onEstado={cambiarEstado}
        />
      )}

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
