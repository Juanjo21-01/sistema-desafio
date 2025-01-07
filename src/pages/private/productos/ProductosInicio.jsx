import { useEffect, useState } from 'react';
import { Loader } from '../../../components/Loader';
import { TablaProductos } from '../../../components/productos/TablaProductos';
import { ModalProducto } from '../../../components/productos/ModalProducto';
import { ModalProductoEliminar } from '../../../components/productos/ModalProductoEliminar';
import { useProductosStore } from '../../../store/productosStore';
import {
  registerProducto,
  updateProducto,
  cambiarEstadoProducto,
  deleteProducto,
} from '../../../helpers/api/productos';

function ProductosInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Store de productos
  const { productos, obtener, isLoading } = useProductosStore();

  // Obtener productos
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Modales
  const abrirModal = () => {
    setProductoSeleccionado(null);
    setIsModalOpen(true);
  };

  const abrirModalEditar = (producto) => {
    setProductoSeleccionado(producto);
    setIsModalOpen(true);
  };

  const abrirModalEliminar = (producto) => {
    setProductoSeleccionado(producto);
    setIsModalEliminarOpen(true);
  };

  // Guardar o editar tipo de producto
  const guardarProducto = async (producto) => {
    if (producto.id) {
      // Editar
      await updateProducto(producto.id, producto);
    } else {
      // Crear
      await registerProducto(producto);
    }

    setIsModalOpen(false);
    obtener();
  };

  // Cambiar estado de tipo de producto
  const cambiarEstado = async (producto) => {
    await cambiarEstadoProducto(producto.id, { estado: !producto.estado });
    obtener();
  };

  // Eliminar tipo de producto
  const eliminarProducto = async () => {
    await deleteProducto(productoSeleccionado.id);
    setIsModalEliminarOpen(false);
    obtener();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4 mb-8">
        {/* Título */}
        <h1 className="text-3xl font-bold">Productos</h1>

        {/* Crear */}
        <button className="btn btn-primary text-white" onClick={abrirModal}>
          Crear<span className="hidden sm:inline">Nuevo Producto</span>
        </button>
      </div>

      {/* Tabla */}
      {isLoading ? (
        <Loader />
      ) : (
        <TablaProductos
          productos={productos}
          onEditar={abrirModalEditar}
          onEliminar={abrirModalEliminar}
          onEstado={cambiarEstado}
        />
      )}

      {/* Modal  */}
      <ModalProducto
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        producto={productoSeleccionado}
        onGuardar={guardarProducto}
      />

      {/* Modal Eliminar */}
      <ModalProductoEliminar
        isOpen={isModalEliminarOpen}
        onClose={() => setIsModalEliminarOpen(false)}
        onConfirm={eliminarProducto}
      />
    </div>
  );
}

export default ProductosInicio;
