import { useState } from 'react';
import { TablaProductos } from '../../../components/productos/TablaProductos';
import { ModalProducto } from '../../../components/productos/ModalProducto';
import { ModalProductoEliminar } from '../../../components/productos/ModalProductoEliminar';

function ProductosInicio() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Store de productos
  const productos = [
    {
      id: 1,
      tipo_producto_id: 'Computadoras',
      nombre: 'Laptop',
      marca: 'HP',
      codigo: 'HP-123',
      precio_unitario: 1000,
      stock: 10,
      estado: 'Activo',
    },
    {
      id: 2,
      tipo_producto_id: 'Electrodomésticos',
      nombre: 'Licuadora',
      marca: 'Oster',
      codigo: 'OST-456',
      precio_unitario: 100,
      stock: 20,
      estado: 'Inactivo',
    },
  ];

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
  const guardarProducto = (producto) => {
    if (producto.id) {
      // Editar
      console.log('Editar: ', producto);
    } else {
      // Crear
      console.log('Crear: ', producto);
    }

    setIsModalOpen(false);
  };

  // Cambiar estado de tipo de producto
  const cambiarEstado = (producto) => {
    console.log('Cambiar estado: ', producto);
  };

  // Eliminar tipo de producto
  const eliminarProducto = () => {
    console.log('Eliminar: ', productoSeleccionado);

    setIsModalEliminarOpen(false);
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
      <TablaProductos
        productos={productos}
        onEditar={abrirModalEditar}
        onEliminar={abrirModalEliminar}
        onEstado={cambiarEstado}
      />

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
