/* eslint-disable react/prop-types */
import { FormularioTipoProducto } from './FormularioTipoProducto';

export const ModalTipoProducto = ({ isOpen, onClose, tipoProducto, onGuardar }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-br from-red-300 via-yellow-300 to-green-300">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white dark:text-gray-700 mb-4">
          {tipoProducto ? 'Editar tipo de producto' : 'Crear tipo de producto'}
        </h2>

        {/* Formulario */}
        <FormularioTipoProducto
          tipoProducto={tipoProducto}
          onGuardar={onGuardar}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
