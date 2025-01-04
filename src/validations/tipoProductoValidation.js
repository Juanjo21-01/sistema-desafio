import * as yup from 'yup';

export const tipoProductoValidation = yup.object().shape({
  nombre: yup
    .string()
    .required('El nombre es obligatorio.')
    .max(30, 'El nombre no puede tener más de 30 caracteres.'),
});
