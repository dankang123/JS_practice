const repeatString = function(string, num) {
    let i = 0;
    final = "";
    if (num < 0) {
        return "ERROR"
    }
    
    for (0; i<num; i++) {
        final+=string;
    }
    return final
};

// Do not edit below this line
module.exports = repeatString;
