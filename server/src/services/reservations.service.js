const ReservationModel = require('../models/reservation.model');

const validatequotas = async (dateSearch) => {
  try {
    const amoutQuotas = await ReservationModel.findAndCountAll({
      where: {
        dateReserve: dateSearch,
      },
    });

    return {
      success: true,
      message: 'Cantidad de cupos.',
      data: amoutQuotas.count,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error al buscar cantidad de cupos.',
      data: [],
    };
  }
};

const saveReservation = async (data) => {
  try {
    const newReservation = new ReservationModel(data);
    const saved = await newReservation.save();

    return {
      success: true,
      message: 'Reservacion exitosa.',
      data: saved,
    };
  } catch (error) {
    console.log('error al crear reservacion', error);

    return {
      success: false,
      message: 'Error al crear reservacion.',
      data: [],
    };
  }
};

const services = { validatequotas, saveReservation };

module.exports = services;
