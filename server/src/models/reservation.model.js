const { DataTypes } = require('sequelize');
const { connectionDB } = require('../config/database');

const ReservationModel = connectionDB.sequelize.define('Reservations', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  amount_people: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reservation_time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateReserve: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = ReservationModel;
