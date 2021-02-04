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
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ message: 'user not found' });
      }
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 400 : 500).send({ message: err.message });
    });
};

const addUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.send({ user });
    })
    .catch((err) => {
      res.status((err.name === 'ValidationError') ? 400 : 500).send({ message: err.message });
    });
};

const setProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about },
    { new: true, runValidators: true, upsert: true })
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ message: 'user not found' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: err.message });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

const setAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar },
    { new: true, runValidators: true, upsert: true })
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ message: 'user not found' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: err.message });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

module.exports = {
  getUser, getUsers, addUser, setProfile, setAvatar,
};
