
const repeatString = function(string, num) {
    let strings = ''
    if (num < 0) {
        return "ERROR";
    }
    for (num; num > 0; num--) {
        strings = strings + string;
    }
    return strings;
};
// Do not edit below this line
module.exports = repeatString;
