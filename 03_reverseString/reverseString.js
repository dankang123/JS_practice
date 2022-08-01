const reverseString = function(revstring) {
    // const split = revstring.split(" ");
    let i = 0;
    let len = revstring.length;
    let newstring = "";

    if (revstring==='') {
        return newstring
    }

    for (0; i<len; i++) {
        newstring += revstring[len-i-1];
    };

    // best alternative would have been
    //return string.split('').reverse().join('');
    return newstring
}
// Do not edit below this line
module.exports = reverseString;
