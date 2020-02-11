let body = {};
module.exports = function (data) {
    if(!data.status) return {error:{status:'"status" must be accept,decline or cancel'}};
    if(!statusObj[data.status.toLowerCase()]) return {error:{status:'"status" must be accept,decline or cancel\''}};
    if(!data.id) return {error:{id:'Must include "id" from /api/v1/funds/transfer endpoint response'}};
    body.status = statusObj[data.status.toLowerCase()];
    body.id = data.id;
    body.metadata= {
        "merchant_defined": true
    }
    return body;
}


const statusObj = {accept:"accept",decline:"decline",cancel:"cancel"};
