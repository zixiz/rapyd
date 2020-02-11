var phoneValid = require('../healpers/phoneCheck');
var validateCurrencyCode = require('validate-currency-code');
let body = [];
module.exports = function (arr) {
    if(arr.length === 0) return {error:{array:"Must contain array of objects with phone, amount and currency"}};
    if(arr.length > 5) return {error:{array:`It seems like you try to add funds to ${arr.length} eWallets, please try add funds less than 5 eWallets`}};
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
                return {error:{amount:'Cant minus transfer'}}
            }
        }else{
            return {error:{phone:'No valid phone number, try E.164 format'}}
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

