import * as yup from 'yup';

export const compraValidation = yup.object().shape({
  fecha_compra: yup.string().required('La fecha de compra es obligatoria.'),
  observaciones: yup
    .string()
    .max(200, 'Las observaciones no pueden tener más de 200 caracteres.'),
  proveedor_id: yup.string().required('El proveedor es obligatorio.'),
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
