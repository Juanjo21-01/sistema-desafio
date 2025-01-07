import { useEffect, useState } from 'react';
import { Loader } from '../../../components/Loader';
import { TablaTipoProductos } from '../../../components/tipoProductos/TablaTipoProductos';
import { ModalTipoProducto } from '../../../components/tipoProductos/ModalTipoProducto';
import { ModalTipoProductoEliminar } from '../../../components/tipoProductos/ModalTipoProductoEliminar';
import { useTipoProductosStore } from '../../../store/tipoProductosStore';
import {
  registerTipoProducto,
  updateTipoProducto,
  cambiarEstadoTipoProducto,
  deleteTipoProducto,
} from '../../../helpers/api/tipoProductos';

function TipoProductosInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [tipoProductoSeleccionado, setTipoProductoSeleccionado] =
    useState(null);

  // Store de tipoProductos
  const { tipoProductos, obtener, isLoading } = useTipoProductosStore();

  // Obtener tipo de productos
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Modales
  const abrirModal = () => {
    setTipoProductoSeleccionado(null);
    setIsModalOpen(true);
  };

  const abrirModalEditar = (tipoProducto) => {
    setTipoProductoSeleccionado(tipoProducto);
    setIsModalOpen(true);
  };

  const abrirModalEliminar = (tipoProducto) => {
    setTipoProductoSeleccionado(tipoProducto);
    setIsModalEliminarOpen(true);
  };

  // Guardar o editar tipo de producto
  const guardarTipoProducto = async (tipoProducto) => {
    if (tipoProducto.id) {
      // Editar
      await updateTipoProducto(tipoProducto.id, tipoProducto);
    } else {
      // Crear
      await registerTipoProducto(tipoProducto);
    }

    setIsModalOpen(false);
    obtener();
  };

  // Cambiar estado de tipo de producto
  const cambiarEstado = async (tipoProducto) => {
    await cambiarEstadoTipoProducto(tipoProducto.id, {
      estado: !tipoProducto.estado,
    });
    obtener();
  };

  // Eliminar tipo de producto
  const eliminarTipoProducto = async () => {
    await deleteTipoProducto(tipoProductoSeleccionado.id);
    setIsModalEliminarOpen(false);
    obtener();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Tipo de Productos</h1>

        {/* Crear */}
        <button className="btn btn-primary text-white" onClick={abrirModal}>
          Crear<span className="hidden sm:inline">Nueva Categoría</span>
        </button>
      </div>

      {/* Tabla */}
      {isLoading ? (
        <Loader />
      ) : (
        <TablaTipoProductos
          tipoProductos={tipoProductos}
          onEditar={abrirModalEditar}
          onEliminar={abrirModalEliminar}
          onEstado={cambiarEstado}
        />
      )}

      {/* Modal  */}
      <ModalTipoProducto
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tipoProducto={tipoProductoSeleccionado}
        onGuardar={guardarTipoProducto}
      />

      {/* Modal Eliminar */}
      <ModalTipoProductoEliminar
        isOpen={isModalEliminarOpen}
        onClose={() => setIsModalEliminarOpen(false)}
        onConfirm={eliminarTipoProducto}
      />
    </div>
  );
}

export default TipoProductosInicio;
