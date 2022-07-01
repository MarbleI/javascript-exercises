const removeFromArray = function(array, ...rmv) {

    for (let i = rmv.length; i >= 0; i--) {
        let index = array.indexOf(rmv[i]);
        if (index!== -1) {
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
