const bcrypt = require('bcryptjs');

const genPassWord = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hast = await bcrypt.hash(password, salt);
  return hast;
};

const services = { genPassWord };

module.exports = services;
