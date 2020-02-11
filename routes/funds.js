var express = require('express');
var router = express.Router();

const addFunds = require('../controllers/addFunds');
const transferFunds = require('../controllers/transferFunds');
const transferResponse = require('../controllers/transferResponse');

//Add funds up to 5 eWallets, read more in README.md file "Add Funds"
router.post('/add',addFunds);

//Transfer funds between eWallets, read more in README.md file "Transfer Funds Between eWallets"
router.post('/transfer', transferFunds);

// Response transfer, read more in README.md file "Cancel/Accept/Decline Transfer API"
router.post('/transfer/response', transferResponse);

module.exports = router;
