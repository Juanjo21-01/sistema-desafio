import * as yup from 'yup';

export const proveedorValidation = yup.object().shape({
  nombre: yup
    .string()
    .required('El nombre es obligatorio.')
    .max(75, 'El nombre no puede tener más de 75 caracteres.'),
  nit: yup
    .string()
    .required('El NIT es obligatorio.')
    .max(15, 'El NIT no puede tener más de 15 caracteres.'),
  direccion: yup.string().required('La dirección es obligatoria.'),
  telefono: yup
    .string()
    .required('El teléfono es obligatorio.')
    .max(8, 'El teléfono no puede tener más de 8 caracteres.')
    .matches(/^[0-9]+$/, 'El teléfono solo puede contener números.'),
});
