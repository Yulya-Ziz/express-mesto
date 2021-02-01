const router = require('express').Router();
const { getUser, getUsers, addUser, setProfile, setAvatar } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', addUser);
router.patch('/users/me', setProfile);
router.patch('/users/me/avatar', setAvatar);

module.exports = router;
