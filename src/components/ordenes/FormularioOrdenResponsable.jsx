/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ordenResponsableValidation } from '../../validations/ordenResponsableValidation';

export const FormularioOrdenResponsable = ({ onGuardar }) => {
  // Validación con react-hook-form y yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ordenResponsableValidation),
    defaultValues: {
      observaciones: '',
    },
  });

  // Enviar el formulario
  const onSubmit = (data) => onGuardar(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg p-4 bg-white/20 backdrop-blur-lg rounded-lg shadow-md border border-gray-400"
    >
      {/* Observaciones */}
      <div className="form-control w-full text-gray-700">
        <label
          htmlFor="observaciones"
          className="label label-text font-semibold text-gray-700"
        >
          Observaciones
        </label>
        <textarea
          id="observaciones"
          {...register('observaciones')}
          className={`textarea textarea-bordered bg-transparent placeholder-gray-500 ${
            errors.observaciones ? 'textarea-error' : 'textarea-success'
          }`}
          placeholder="Ingresa las observaciones..."
        ></textarea>
        {errors.observaciones && (
          <span className="text-error text-sm mt-1">
            {errors.observaciones.message}
          </span>
        )}
      </div>

      <div className="modal-action gap-2 justify-center">
        <button type="submit" className="btn btn-success text-white">
          Finalizar Orden
        </button>
      </div>
    </form>
  );
};
