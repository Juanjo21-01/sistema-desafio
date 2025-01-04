import * as yup from 'yup';

export const registerValidation = yup.object().shape({
  nombres: yup
    .string()
    .required('El nombre es obligatorio.')
    .max(50, 'El nombre no puede tener más de 50 caracteres.'),
  apellidos: yup
    .string()
    .required('El apellido es obligatorio.')
    .max(50, 'El apellido no puede tener más de 50 caracteres.'),
  email: yup
    .string()
    .required('El correo electrónico es obligatorio.')
    .email('Debe ser un correo electrónico válido'),
  password: yup
    .string()
    .required('La contraseña es obligatoria.')
    .min(6, 'La contraseña debe tener al menos 8 caracteres.'),
  direccion: yup.string(),
  telefono: yup
    .string()
    .required('El teléfono es obligatorio.')
    .max(8, 'El teléfono no puede tener más de 8 caracteres.')
    .matches(/^[0-9]+$/, 'El teléfono solo puede contener números.'),
  fecha_nacimiento: yup.string(),
});
