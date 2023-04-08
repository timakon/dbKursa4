const express = require('express');
const routes = require('./routes');

const { mongoDb } = require('./db');

const app = express();

app.use(express.json()); // Заменили body-parser на express.json()
app.use(express.urlencoded({ extended: false })); // Заменили body-parser на express.urlencoded()
app.use('/', routes);

mongoDb.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Сервер работает на порту 3000');
  });
});

mongoDb.on('error', (error) => {
  console.error('MongoDB connection failed:', error);
  throw error;
});