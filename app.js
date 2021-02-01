const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardsRoutes = require('./routes/cards.js');
const usersRoutes = require('./routes/users.js');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '601704d137c52f05f4c36664',
  };

  next();
});
app.use('/', cardsRoutes);
app.use('/', usersRoutes);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Приложение запущено, порт ${PORT}`);
});
