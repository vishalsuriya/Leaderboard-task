const express = require('express');
const{getUsers,addUser,claimPoints} = require('../Controller/UserController');
const router = express.Router();

router.get('/getUsers',getUsers);
router.post('/addUser',addUser);
router.post('/claim/:userId',claimPoints);

module.exports = router;