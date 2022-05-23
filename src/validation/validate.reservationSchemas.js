import * as yup from 'yup';

const reservationSchema = yup.object().shape({
  amount_people: yup
    .number('La cantidad de personas debe ser un número')
    .integer('La cantidad de personas debe ser un número entero')
    .min(1, 'Minimo una persona')
    .required('La cantidad de personas es requerida.')
    .typeError('La cantidad de personas debe ser un número'),
  reservation_time: yup
    .string()
    .required('La hora de la reservación es requerida.'),
});

export const reserveWithUserScehma = yup.object().shape({
  email: yup.string().email('Ingrese correo').required('Correo es requerido'),
  password: yup
    .string()
    .required('Contraseña es requerida')
    .min(8, 'minimo 8 caracteres'),
});

export const FormRegisterUserSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zá-üÁ-Ü ]+$/, 'Ingresa un nombre valido.')
    .required(),
  last_name: yup
    .string()
    .matches(/^[a-zA-Zá-üÁ-Ü ]+$/, 'Ingresa un apellido valido.')
    .required(),
  email: yup
    .string()
    .email('Ingresa un correo valido.')
    .required('Correo es requerido.'),
  phone: yup.string().matches(/^[+0-9]+$/, 'Ingresa un teléfono valido.'),
  password: yup
    .string()
    .required('Contraseña es requerida.')
    .min(8, 'Debe contener, al menos, 8 caracteres.'),
  password_two: yup
    .string()
    .required('Confime contraseña.')
    .min(8, 'Debe contener, al menos, 8 caracteres.')
    .oneOf([yup.ref('password')], 'Contraseñas no coinciden'),
});

export default reservationSchema;
