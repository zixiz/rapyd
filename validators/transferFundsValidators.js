var phoneValid = require('../healpers/phoneCheck');
var validateCurrencyCode = require('validate-currency-code');
let body = {};
module.exports = function (data) {
    if(!data.amount) return{error:{amount:'must enter an amount'}};
    if(parseFloat(data.amount)<0)  return{error:{amount:'Can not transfer a negative amount'}};
    if(!validateCurrencyCode(data.currency)) return{error:{amount:'Error with currency symbol, try ISO 4217 currency code'}};
    if(!phoneValid(data.destination_phone_number)) return{error:{destination_phone_number:'Invalid phone number, try E.164 format'}};
    if(!phoneValid(data.source_phone_number)) return{error:{destination_phone_number:'Invalid phone number, try E.164 format'}};
    body.amount = parseFloat(data.amount);
    body.currency = data.currency;
    body.destination_phone_number = data.destination_phone_number;
    body.source_phone_number = data.source_phone_number;
    body.metadata = {"merchant_defined": true};

    return body;
}
