var transferFundsValid = require('../validators/transferFundsValidators');
var headerHelper = require('../healpers/headersHelper');
const axios = require('axios');
const CONSTANTS = require('../healpers/constant');

module.exports = async function transferFunds (req, res) {
    let transferFundsData = req.body;
    let body = transferFundsValid(transferFundsData);
    if(body.error) return res.json(body.error);
    let healper = headerHelper("post",CONSTANTS.URI.TRANSFER_FUNDS.path,body);

    axios.post(CONSTANTS.URI.TRANSFER_FUNDS.url,body,{headers:{
            'Content-Type': 'application/json',
            'signature': healper.signature,
            'salt':healper.salt,
            'timestamp':healper.timestamp,
            'access_key':healper.access_key
        }})
        .then((response) => {
            return res.json({response:response.data.data});
        })
        .catch((error) => {
            return res.json({error});
        });
};
