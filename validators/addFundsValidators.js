var phoneValid = require('../healpers/phoneCheck');
var validateCurrencyCode = require('validate-currency-code');


let body = [];
module.exports = function (arr) {
    if(arr.length === 0) return {error:{array:"Must contain an array of objects with 'phone_number', 'amount' and 'currency'"}};
    if(arr.length > 5) return {error:{array:`It seems like you tried to add funds to ${arr.length} eWallets, please try to add funds to up to 5 eWallets at a time.`}};
    for (let i = 0; i <arr.length ; i++) {
        if(phoneValid(arr[i].phone_number)){
            let amount = parseFloat(arr[i].amount);
            if(amount > 0){
                if(validateCurrencyCode(arr[i].currency)){
                    let temoObj = {
                        currency:arr[i].currency,
                        amount:amount,
                        phone_number:arr[i].phone_number,
                        metadata:{"merchant_defined": true}
                    };
                    body.push(temoObj);
                }else{
                    return {error:{currency:'Error with currency symbol, try ISO 4217 currency code'}}
                }
            }else{
                return {error:{amount:'Can not transfer a negative amount'}}
            }
        }else{
            return {error:{phone:'Invalid phone number, try E.164 format'}}
        }
    }
    return body;

}
function stringCheck (myVar){
    if (typeof myVar === 'string' || myVar instanceof String){
        return true
    }
    else{
        return false
    }
}

