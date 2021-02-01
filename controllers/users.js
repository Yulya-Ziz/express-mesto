const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((usersList) => {
      res.send(usersList);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  User.findOne({ id })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(user);
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 404 : 500).send({ message: err.message });
    });
};

const addUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.send({ user });
    })
    .catch((err) => {
      res.status((err.name === 'ValidationError') ? 400 : 500).send({ message: err.message });
    });
};

const setProfile = (req, res) => {
  User.findByIdAndUpdate(req.user._id, req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status((err.name === 'ValidationError') ? 400 : 500).send({ message: err.message });
    });
};

const setAvatar = (req, res) => {
  User.findByIdAndUpdate(req.user._id, req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status((err.name === 'ValidationError') ? 400 : 500).send({ message: err.message });
    });
};

module.exports = {
  getUser, getUsers, addUser, setProfile, setAvatar,
};
