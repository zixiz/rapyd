module.exports = function phoneValid(phone) {
    var regex = /^\+(?:[0-9]●?){6,14}[0-9]$/;

    if (regex.test(phone)) {
        return true;
    } else {
        return false;
    }
}
