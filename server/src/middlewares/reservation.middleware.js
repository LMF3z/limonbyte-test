const reservationSchema = require('../validations/validate.reservationSchemas');

const validateFormatReservation = async (req, res, next) => {
  try {
    const { body } = req;
    const { data_reservation } = body;

    const isValidFormat = await reservationSchema.isValid(data_reservation);

    reservationSchema.validate(data_reservation).catch((err) => {
      console.log('err name', err.name);
      console.log('err type', err.errors);
    });

    if (isValidFormat === false) {
      return res.json({
        success: false,
        message: 'Datos no cumplen con un formato valido.',
        data: [],
      });
    }

    if (!data_reservation.dateReservation) {
      return res.json({
        success: false,
        message: 'Datos no cumplen con un formato valido.',
        data: [],
      });
    }

    next();
  } catch (error) {
    console.log('Error al verificar datos', error);
    return res.json({
      success: false,
      message: 'Error al verificar datos',
      data: [],
    });
  }
};

module.exports = validateFormatReservation;
