/* eslint-disable react/prop-types */
import { FormularioProducto } from './FormularioProducto';

export const ModalProducto = ({ isOpen, onClose, producto, onGuardar }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-br from-red-300 via-yellow-300 to-green-300">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white dark:text-gray-700 mb-4">
          {producto ? 'Editar producto' : 'Crear producto'}
        </h2>

        {/* Formulario */}
        <FormularioProducto
          producto={producto}
          onGuardar={onGuardar}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
