import { useState } from 'react';
import { TablaTipoProductos } from '../../../components/tipoProductos/TablaTipoProductos';
import { ModalTipoProducto } from '../../../components/tipoProductos/ModalTipoProducto';
import { ModalTipoProductoEliminar } from '../../../components/tipoProductos/ModalTipoProductoEliminar';

function TipoProductosInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [tipoProductoSeleccionado, setTipoProductoSeleccionado] =
    useState(null);

  // Store de tipoProductos
  const tipoProductos = [
    {
      id: 1,
      nombre: 'Computadoras',
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'Electrodomésticos',
      estado: 'Inactivo',
    },
  ];

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
  const guardarTipoProducto = (tipoProducto) => {
    if (tipoProducto.id) {
      // Editar
      console.log('Editar: ', tipoProducto);
    } else {
      // Crear
      console.log('Crear: ', tipoProducto);
    }

    setIsModalOpen(false);
  };

  // Cambiar estado de tipo de producto
  const cambiarEstado = (tipoProducto) => {
    console.log('Cambiar estado: ', tipoProducto);
  };

  // Eliminar tipo de producto
  const eliminarTipoProducto = () => {
    console.log('Eliminar: ', tipoProductoSeleccionado);

    setIsModalEliminarOpen(false);
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
      <TablaTipoProductos
        tipoProductos={tipoProductos}
        onEditar={abrirModalEditar}
        onEliminar={abrirModalEliminar}
        onEstado={cambiarEstado}
      />

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
