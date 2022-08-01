const removeFromArray = function(arr, ...remArr) {
    newArray = [];

    arr.forEach((item) => {
        if (!remArr.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
