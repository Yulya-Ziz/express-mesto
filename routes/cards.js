const router = require('express').Router();
const { getCards, createCard, deleteCard, setLike, setDislike } = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);

router.put('/cards/:cardId/likes', setLike);
router.delete('/cards/:cardId/likes', setDislike);

module.exports = router;
