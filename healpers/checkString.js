module.exports = function stringCheck (myVar){
    if (typeof myVar === 'string' || myVar instanceof String){
        return true
    }
    else{
        return false
    }
}


