var headerHelper = require('../healpers/headersHelper');
var createValid = require('../validators/createValidators');
const CONSTANTS = require('../healpers/constant');
const axios = require('axios');

module.exports = async function createEwallet (req, res) {
    let body = createValid(req.body);
    if(body.error) return res.json(body.error);
    let healper = headerHelper("post",CONSTANTS.URI.CREATE.path,body);
    axios.post(CONSTANTS.URI.CREATE.url,body,{headers:{
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
