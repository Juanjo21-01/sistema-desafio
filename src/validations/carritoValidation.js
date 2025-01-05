import * as yup from 'yup';

export const carritoValidation = yup.object().shape({
  detalles: yup.array().of(
    yup.object().shape({
      producto_id: yup.string().required('El producto es obligatorio.'),
      cantidad: yup
        .number()
        .required('La cantidad es obligatoria.')
        .min(1, 'La cantidad mínima es 1.'),
      precio_unitario: yup
        .number()
        .required('El precio es obligatorio.')
        .min(0.01, 'El precio mínimo es 0.01.'),
    })
  ),
});
