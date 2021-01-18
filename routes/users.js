const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile.js');

router.get('/users', (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((usersList) => {
      res.send(usersList);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  readFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((usersList) => {
      const user = usersList.find((u) => u._id === id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = router;
