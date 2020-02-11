var phoneValid = require('../healpers/phoneCheck');
var checkString = require('../healpers/checkString');
let body = {};
module.exports = function (data) {
    if(!phoneValid(data.phone_number)){
        return {error:
                {phone:'Invalid phone number, try E.164 format'}
        };
    }else{
        body.phone_number = data.phone_number;
    }
    if(checkString(data.first_name)){
        body.first_name = data.first_name;
    }else{
        body.first_name = '';
    }
    if(checkString(data.last_name)){
        body.last_name = data.last_name;
    }else{
        body.last_name = '';
    }
    if(checkString(data.email)){
        body.email = data.email;
    }else{
        body.email = '';
    }

    body.type="person";
    body.business_details={};
    body.metadata = {"merchant_defined": true};

    return body;

}


