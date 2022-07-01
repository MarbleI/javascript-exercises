const sumAll = function(arg1, arg2) {
    let value = 0;
    let test = arg1 - arg2;
    let test2 = arg1 * arg2;
    if (test < 0 && test2 > 0) {
        for (let i = arg1; i <= arg2; i++) {
            value += i;
        }
    } else if (test > 0) {
        for (let i = arg1; i >= arg2; i--) {
            value += i;
        }
    } else {
        return "ERROR"
    }
    return value
};

// Do not edit below this line
module.exports = sumAll;
