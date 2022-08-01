const leapYears = function(year) {
    // first condition for leapyear (divisible by 4)
    if (year % 4 === 0) {
        // if divisible by 400 true
        if (year % 400 == 0){
            return true
        }
        // if divisible by 100 not true
        else if (year % 100 == 0){
            return false
        }

        else return true
    }

    else return false
};

// Do not edit below this line
module.exports = leapYears;
