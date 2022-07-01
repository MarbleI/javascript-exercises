const reverseString = function(string) {
    let reverseString = "";
    let letter = "";
    for (let i = string.length; i >= 0; i--) {
        letter = string.slice(i, i+1);
        reverseString += letter;
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
