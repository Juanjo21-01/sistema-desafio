import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { FaBox, FaLayerGroup } from 'react-icons/fa';
import { ModalTipoProducto } from '../../../components/tipoProductos/ModalTipoProducto';

function TipoProductoDetalle() {
  // Variables de estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tipoProductoSeleccionado, setTipoProductoSeleccionado] =
    useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const tipoProducto = {
    id: id,
    nombre: 'Computadoras',
    estado: true,
  };

  // Modal
  const abrirModalEditar = (tipoProducto) => {
    setTipoProductoSeleccionado(tipoProducto);
    setIsModalOpen(true);
  };

  // Editar tipoProducto
  const editarTipoProducto = (tipoProducto) => {
    if (tipoProducto.id) {
      // Editar
      console.log('Editar: ', tipoProducto);
    } else {
      // Crear
      return console.error('No se puede crear un tipoProducto desde aquí');
    }

    setIsModalOpen(false);
  };

  return (
    <div className="card bg-base-200 shadow-xl p-4">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icono */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center bg-primary/10">
              <FaLayerGroup className="w-16 h-16 text-primary" />
            </div>
            <div
              className={`badge badge-lg ${
                tipoProducto.estado ? 'badge-success' : 'badge-error'
              }`}
            >
              {tipoProducto.estado ? 'Activo' : 'Inactivo'}
            </div>
          </div>

          {/* Información Principal */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{tipoProducto.nombre}</h2>
            <div className="grid gap-4">
              {/* Productos Asociados */}
              <div className="flex items-center gap-2">
                <FaBox className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">
                    Productos en esta categoría
                  </p>
                  <p className="font-semibold">15 productos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="card-actions justify-end gap-4">
          <button
            onClick={() => navigate('/tipo-productos')}
            className="btn btn-neutral btn-outline"
          >
            Volver
          </button>
          <button
            onClick={() => abrirModalEditar(tipoProducto)}
            className="btn btn-warning text-white"
          >
            Editar Categoria
          </button>
        </div>
      </div>

      {/* Modal  */}
      <ModalTipoProducto
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tipoProducto={tipoProductoSeleccionado}
        onGuardar={editarTipoProducto}
      />
    </div>
  );
}

export default TipoProductoDetalle;
