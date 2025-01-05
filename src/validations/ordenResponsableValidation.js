import * as yup from 'yup';

export const ordenResponsableValidation = yup.object().shape({
  observaciones: yup
    .string()
    .max(200, 'Las observaciones no pueden tener más de 200 caracteres.'),
});
