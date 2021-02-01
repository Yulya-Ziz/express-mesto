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
      res.status((err.name === 'ValidationError') ? 400 : 500).send(err.message);
    });
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .then((del) => {
      res.status((!del) ? 404 : 200).send();
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 404 : 500).send(err.message);
    });
};

const setLike = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      res.status((!card) ? 404 : 200).send(card);
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 404 : 500).send(err.message);
    });
};

const setDislike = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      res.status((!card) ? 404 : 200).send(card);
    })
    .catch((err) => {
      res.status((err.name === 'CastError') ? 404 : 500).send(err.message);
    });
};

module.exports = {
  getCards, createCard, deleteCard, setLike, setDislike,
};
