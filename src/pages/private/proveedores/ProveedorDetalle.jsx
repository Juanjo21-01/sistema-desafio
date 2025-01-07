import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineNumbers } from 'react-icons/md';
import { ModalProveedor } from '../../../components/proveedores/ModalProveedor';
import {
  getProveedorById,
  updateProveedor,
} from '../../../helpers/api/proveedores';
import { Loader } from '../../../components/Loader';

function ProveedorDetalle() {
  // Variables de estado
  const [proveedor, setProveedor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Proveedor
  useEffect(() => {
    getProveedorById(id).then((data) => setProveedor(data));
  }, [id]);

  // Modal
  const abrirModalEditar = (proveedor) => {
    setProveedorSeleccionado(proveedor);
    setIsModalOpen(true);
  };

  // Editar proveedor
  const editarProveedor = async (proveedor) => {
    if (proveedor.id) {
      // Editar
      await updateProveedor(proveedor.id, proveedor);
    } else {
      // Crear
      return console.error('No se puede crear un proveedor desde aquí');
    }

    setIsModalOpen(false);

    // Actualizar el proveedor
    const proveedorActualizado = await getProveedorById(proveedor.id);
    setProveedor(proveedorActualizado);
  };

  if (!proveedor) return <Loader />;

  return (
    <div className="card bg-base-200 shadow-xl p-4">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <FaUser className="w-full h-full p-4 bg-primary/10 text-primary" />
              </div>
            </div>
            <div
              className={`badge badge-lg font-semibold leading-tight badge-${
                proveedor.estado
                  ? 'success text-green-700 dark:text-green-100'
                  : 'error text-red-700 dark:text-red-100'
              }`}
            >
              {proveedor.estado ? 'Activo' : 'Inactivo'}
            </div>
          </div>

          {/* Información Principal */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{proveedor.nombre}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dirección */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Dirección</p>
                  <p>{proveedor.direccion}</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p>{proveedor.telefono}</p>
                </div>
              </div>

              {/* NIT */}
              <div className="flex items-center gap-2">
                <MdOutlineNumbers className="text-primary w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-500">NIT</p>
                  <p>{proveedor.nit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="card-actions justify-end gap-4">
          <button
            onClick={() => navigate('/proveedores')}
            className="btn btn-neutral btn-outline"
          >
            Volver
          </button>
          <button
            onClick={() => abrirModalEditar(proveedor)}
            className="btn btn-warning text-white"
          >
            Editar Proveedor
          </button>
        </div>
      </div>

      {/* Modal  */}
      <ModalProveedor
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        proveedor={proveedorSeleccionado}
        onGuardar={editarProveedor}
      />
    </div>
  );
}

export default ProveedorDetalle;
