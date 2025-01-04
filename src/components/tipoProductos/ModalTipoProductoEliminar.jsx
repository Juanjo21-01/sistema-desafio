/* eslint-disable react/prop-types */

export const ModalTipoProductoEliminar = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-br from-red-300 via-yellow-300 to-green-300">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white dark:text-gray-700 mb-4">
          ¿Estás seguro de que deseas eliminar este tipo de producto?
        </h2>

        <div className="modal-action gap-2 justify-center">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-neutral btn-outline font-bold"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="btn btn-error text-white font-bold"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
