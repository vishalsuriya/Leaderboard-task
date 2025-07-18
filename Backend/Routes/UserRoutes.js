const express = require('express');

const router = express.Router();

router.get('/getUser',getUser);
router.post('/addUser',addUser);
router.post('/claim/:userId',claimPoints);

module.exports = router;