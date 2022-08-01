const sumAll = function(start, end) {

    // checking if not negative or not number for error
    if ((start)<0 || (end) < 0) return 'ERROR';
    if ((typeof start != "number")||(typeof end != "number")) return 'ERROR';


    if (start > end) {
        const temp = end;
        end = start;
        start = temp;
    }

    let i = start;
    var numFin = 0;
    for (start; i<end+1; i++) {
        numFin += i;
    }

    return numFin


};

// so we want to start out with 2 arguments, start and finish. then we can make a for loop that starts with the 
// "start" and increments by 1 until "end". we add the value from each loop onto a variable called
// numFin

// Do not edit below this line
module.exports = sumAll;
