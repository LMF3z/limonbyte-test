const express = require('express');
const reservationController = require('../controllers/reservation.controller');
const validateFormatReservation = require('../middlewares/reservation.middleware');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'hello world' }));

router.post('/api/register-user', reservationController.registerUser);

router.post(
  '/api/create-reservation',
  validateFormatReservation,
  reservationController.createReservation
);

module.exports = router;
