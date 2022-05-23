const userServices = require('../services/user.service');
const reservationsServices = require('../services/reservations.service');

const registerUser = async (req, res) => {
  const { body } = req;

  const { data, data_reservation } = body;

  const newUser = await userServices.saveNewUser(data);

  const parserDate = new Date(data_reservation.dateReservation);
  const formatedDate = parserDate.toISOString().split('T')[0];

  const thereareQuotes = await reservationsServices.validatequotas(
    formatedDate
  );

  if (thereareQuotes.data < 20) {
    data_reservation.dateReserve = formatedDate;

    const saved = await reservationsServices.saveReservation(data_reservation);
    return res.json(saved);
  }

  res.json({ message: 'No hay cupos disponibles', success: false, data: [] });
};

const createReservation = async (req, res) => {
  const { body } = req;

  const { data_reservation } = body;

  const parserDate = new Date(data_reservation.dateReservation);
  const formatedDate = parserDate.toISOString().split('T')[0];

  const thereareQuotes = await reservationsServices.validatequotas(
    formatedDate
  );

  if (thereareQuotes.data < 20) {
    data_reservation.dateReserve = formatedDate;
    const saved = await reservationsServices.saveReservation(data_reservation);
    return res.json(saved);
  }

  res.json({ message: 'No hay cupos disponibles', success: false, data: [] });
};

const controller = { registerUser, createReservation };

module.exports = controller;
