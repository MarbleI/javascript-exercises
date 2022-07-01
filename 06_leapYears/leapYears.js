const leapYears = function(arg1) {
    if ((arg1 % 400 === 0) || !(arg1 % 100 === 0) && (arg1 % 4 === 0)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
