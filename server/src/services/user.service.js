const UserModel = require('../models/user.model');
const handlePasswords = require('../services/handlePassword');

const saveNewUser = async (data) => {
  try {
    const newPass = await handlePasswords.genPassWord(data.password);
    data.password = newPass;

    const newUser = new UserModel(data);
    const saved = await newUser.save();

    return {
      success: true,
      message: 'Guardado exitoso',
      data: saved,
    };
  } catch (error) {
    console.log('error al guardar usuario');
    return {
      success: false,
      message: 'Error al guardar nuevo usuario',
      data: [],
    };
  }
};

const services = { saveNewUser };

module.exports = services;
