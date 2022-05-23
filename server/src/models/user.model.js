const { DataTypes } = require('sequelize');
const { connectionDB } = require('../config/database');

const UserModel = connectionDB.sequelize.define(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamp: true }
);

module.exports = UserModel;

// name: yup
//     .string()
//     .matches(/^[a-zA-Zá-üÁ-Ü ]+$/, 'Ingresa un nombre valido.')
//     .required(),
//   last_name: yup
//     .string()
//     .matches(/^[a-zA-Zá-üÁ-Ü ]+$/, 'Ingresa un apellido valido.')
//     .required(),
//   email: yup
//     .string()
//     .email('Ingresa un correo valido.')
//     .required('Correo es requerido.'),
//   phone: yup.string().matches(/^[+0-9]+$/, 'Ingresa un teléfono valido.'),
//   password: yup
//     .string()
//     .required('Contraseña es requerida.')
//     .min(8, 'Debe contener, al menos, 8 caracteres.'),
//   password_two: yup
//     .string()
//     .required('Confime contraseña.')
//     .min(8, 'Debe contener, al menos, 8 caracteres.')
//     .oneOf([yup.ref('password')], 'Contraseñas no coinciden'),
