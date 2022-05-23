const express = require('express');
const cors = require('cors');
require('dotenv').config('../.env');
const { connectionDB } = require('./config/database');

const router = require('./router/index.routes');

const PORT = process.env.PORT || 8000;

const app = express();

app.set('port', PORT);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(app.get('port'), async () => {
  await connectionDB.connect();
  console.log(`server running on port ${app.get('port')}`);
});
