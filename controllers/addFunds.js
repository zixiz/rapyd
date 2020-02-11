var addedFundsValid = require('../validators/addFundsValidators');
var promiseFactoryFunds = require("../healpers/promiseFactoryFunds");

module.exports = async function addFunds (req, res) {
    let addedFundsArr = req.body;
    let valids = addedFundsValid(addedFundsArr.funds);
    if(valids.error) return res.json({valids});

    let promises = promiseFactoryFunds(valids);

    Promise.all(promises).then(function(response) {
        return res.json(response);
    }).catch(function (error) {
        return res.json(error);
    })
}
