import axios from 'axios';

const url_base = process.env.REACT_APP_API_URL;

const saveNewUser = async (data) =>
  await axios.post(`${url_base}/register-user`, data);

const saveReservation = async (data) =>
  await axios.post(`${url_base}/create-reservation`, data);

const api = { saveNewUser, saveReservation };

export default api;
