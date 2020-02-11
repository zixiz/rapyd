var express = require('express');
var router = express.Router();
const createEwallet = require('../controllers/createEwallet');


router.post('/ewallet',createEwallet);

module.exports = router;
