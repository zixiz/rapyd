var headerHelper = require('../healpers/headersHelper');
const axios = require('axios');
const CONSTANTS = require('../healpers/constant');
var transferResponseValid = require('../validators/transferResponseValidators');

module.exports = async function transferResponse (req, res) {
    let transferResponseData = req.body;
    let body = transferResponseValid(transferResponseData);
    if(body.error) return res.json(body.error);

    let healper = headerHelper("post",CONSTANTS.URI.TRANSFER_RESPONSE.path,body);

    try{
        let response = await axios.post(CONSTANTS.URI.TRANSFER_RESPONSE.url,body,{headers:{
                'Content-Type': 'application/json',
                'signature': healper.signature,
                'salt':healper.salt,
                'timestamp':healper.timestamp,
                'access_key':healper.access_key
            }});
        return res.json({response:response.data.data});
    }catch (e) {
        return res.json(e);
    }
};
