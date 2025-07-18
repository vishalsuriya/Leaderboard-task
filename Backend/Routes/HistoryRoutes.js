const express = require('express');
const{getHistory} = require('../Controller/HistoryController');

const router = express.Router();

router.get('/:userId',getHistory);


module.exports = router;