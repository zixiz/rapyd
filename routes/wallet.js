var express = require('express');
var router = express.Router();
const createEwallet = require('../controllers/createEwallet');

//This Router Create eWallet, read more in README.md file "Create Ewallet"

router.post('/ewallet',createEwallet);

module.exports = router;
