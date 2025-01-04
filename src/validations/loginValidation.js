import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required('El correo electrónico es obligatorio.')
    .email('Debe ser un correo electrónico válido'),
  password: yup
    .string()
    .required('La contraseña es obligatoria.')
    .min(8, 'La contraseña debe tener al menos 8 caracteres.'),
});
