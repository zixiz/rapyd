require('dotenv').config();
var CryptoJS = require("crypto-js");


module.exports = function (method,url_path,data) {
    var http_method = method;
    var url_path = url_path;
    var salt = CryptoJS.lib.WordArray.random(12);
    var timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();
    // Current Unix time.
    var access_key = process.env.MYACCESSKEY;
    var secret_key = process.env.MYSECRETKEY;
    var body = '';

    if (JSON.stringify(data) !== '{}' && data !== '') {
        body = JSON.stringify(data);
    }

    var to_sign = http_method + url_path + salt + timestamp + access_key + secret_key + body;

    var signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(to_sign, secret_key));

    signature = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));
    return {signature:signature,salt:'' + salt,timestamp:timestamp,access_key:access_key}
}
