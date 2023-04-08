const express = require('express');
const routes = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');

const { mongoDb } = require('./db');

const app = express();


app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(cookieParser());


app.use(express.json()); // Заменили body-parser на express.json()
app.use(express.urlencoded({ extended: false })); // Заменили body-parser на express.urlencoded()

app.get('/', (req, res) => {
  res.render('main');
});
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