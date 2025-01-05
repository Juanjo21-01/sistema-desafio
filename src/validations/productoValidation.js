import * as yup from 'yup';

export const productoValidation = yup.object().shape({
  nombre: yup
    .string()
    .required('El nombre es obligatorio.')
    .max(50, 'El nombre no puede tener más de 50 caracteres.'),
  tipo_producto_id: yup
    .string()
    .required('El tipo de producto es obligatorio.'),
  marca: yup.string().max(50, 'La marca no puede tener más de 50 caracteres.'),
  codigo: yup
    .string()
    .required('El código es obligatorio.')
    .max(255, 'El código no puede tener más de 255 caracteres.'),
  precio_unitario: yup
    .string()
    .required('El precio unitario es obligatorio.')
    .matches(
      /^[0-9]+([.][0-9]{1,2})?$/,
      'El precio unitario debe ser un número válido.'
    ),
  stock: yup
    .string()
    .required('El stock es obligatorio.')
    .matches(/^[0-9]+$/, 'El stock debe ser un número válido.'),
});
