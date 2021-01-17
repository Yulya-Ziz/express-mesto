const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile.js');

router.get('/cards', (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cardsList) => {
      res.send(cardsList);
    })
    .catch((err) => {
      res.status(500).send(`Internal Server Error: ${err.message}`);
    });
});

module.exports = router;
