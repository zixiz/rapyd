var headerHelper = require('./headersHelper');
const constatns = require('../healpers/constant');
const axios = require('axios');

let promises = [];
module.exports = function (arr) {
    for (let i = 0; i <arr.length ; i++) {
        let body = arr[i];
        let healper = headerHelper("post",constatns.URI.ADDED_FUNDS.path,body);
        promises.push(axios.post(constatns.URI.ADDED_FUNDS.url,body,{headers:{
                'Content-Type': 'application/json',
                'signature': healper.signature,
                'salt':healper.salt,
                'timestamp':healper.timestamp,
                'access_key':healper.access_key
            }})
            .then((response) => {
                return({response:response.data.data});
            })
            .catch((error) => {
                return ({error})
            }));

    }
    return promises;

}


