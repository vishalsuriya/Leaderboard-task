const express = require('express');


const router = express.Router();

router.get('/:userId',getHistory);


module.exports = router;