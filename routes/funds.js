var express = require('express');
var router = express.Router();

const addFunds = require('../controllers/addFunds');
const transferFunds = require('../controllers/transferFunds');
const transferResponse = require('../controllers/transferResponse');
router.post('/add',addFunds);

router.post('/transfer', transferFunds);

router.post('/transfer/response', transferResponse);

module.exports = router;
