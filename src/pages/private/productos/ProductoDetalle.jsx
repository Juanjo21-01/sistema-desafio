import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  FaBox,
  FaBarcode,
  FaDollarSign,
  FaLayerGroup,
  FaTags,
  FaBoxOpen,
} from 'react-icons/fa';
import { ModalProducto } from '../../../components/productos/ModalProducto';

function ProductoDetalle() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const producto = {
    id: id,
    tipo_producto_id: 'Computadoras',
    nombre: 'Laptop HP',
    marca: 'HP',
    codigo: 'HP-123',
    precio_unitario: 1000,
    stock: 10,
    estado: true,
    foto: 'https://picsum.photos/200',
  };

  // Modal
  const abrirModalEditar = (producto) => {
    setProductoSeleccionado(producto);
    setIsModalOpen(true);
  };

  // Editar producto
  const editarProducto = (producto) => {
    if (producto.id) {
      // Editar
      console.log('Editar: ', producto);
    } else {
      // Crear
      return console.error('No se puede crear un producto desde aquí');
    }

    setIsModalOpen(false);
  };

  return (
    <div className="card bg-base-200 shadow-xl p-4">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen y Estado */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-48 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={producto.foto}
                alt={producto.nombre}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div
              className={`badge badge-lg ${
                producto.estado ? 'badge-success' : 'badge-error'
              }`}
            >
              {producto.estado ? 'Activo' : 'Inactivo'}
            </div>
          </div>

          {/* Información Principal */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">{producto.nombre}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categoría */}
              <div className="flex items-center gap-3">
                <FaLayerGroup className="text-primary text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Categoría</p>
                  <p className="font-semibold">{producto.tipo_producto_id}</p>
                </div>
              </div>

              {/* Marca */}
              <div className="flex items-center gap-3">
                <FaTags className="text-primary text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Marca</p>
                  <p className="font-semibold">{producto.marca}</p>
                </div>
              </div>

              {/* Código */}
              <div className="flex items-center gap-3">
                <FaBarcode className="text-primary text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Código</p>
                  <p className="font-semibold">{producto.codigo}</p>
                </div>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-3">
                <FaBoxOpen className="text-primary text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Stock Disponible</p>
                  <p className="font-semibold">{producto.stock} unidades</p>
                </div>
              </div>

              {/* Precio */}
              <div className="flex items-center gap-3">
                <FaDollarSign className="text-primary text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Precio Unitario</p>
                  <p className="font-semibold">
                    Q{producto.precio_unitario.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Stock Valorizado */}
              <div className="flex items-center gap-3">
                <FaBox className="text-primary text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Stock Valorizado</p>
                  <p className="font-semibold">
                    Q{(producto.stock * producto.precio_unitario).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="divider "></div>
        <div className="card-actions justify-end gap-4">
          <button
            onClick={() => navigate('/productos')}
            className="btn btn-neutral btn-outline"
          >
            Volver
          </button>
          <button
            onClick={() => abrirModalEditar(producto)}
            className="btn btn-warning text-white"
          >
            Editar Producto
          </button>
        </div>
      </div>

      {/* Modal de Producto */}
      <ModalProducto
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        producto={productoSeleccionado}
        onGuardar={editarProducto}
      />
    </div>
  );
}

export default ProductoDetalle;
