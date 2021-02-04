const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cardsList) => {
      res.send(cardsList);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      res.status((err.name === 'ValidationError') ? 400 : 500).send({ message: err.message });
    });
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .then((del) => {
      if (del) {
        res.status(200).send({ message: 'card deleted' });
      } else {
        res.status(404).send({ message: 'card not found' });
      }
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 400 : 500).send({ message: err.message });
    });
};

const setLike = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (card) {
        res.status(200).send(card);
      } else {
        res.status(404).send({ message: 'card not found' });
      }
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 400 : 500).send({ message: err.message });
    });
};

const setDislike = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (card) {
        res.status(200).send(card);
      } else {
        res.status(404).send({ message: 'card not found' });
      }
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 400 : 500).send({ message: err.message });
    });
};

module.exports = {
  getCards, createCard, deleteCard, setLike, setDislike,
};
