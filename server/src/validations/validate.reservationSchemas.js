const yup = require('yup');

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

module.exports = reservationSchema;
