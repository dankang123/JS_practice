const ftoc = function(faren) { 
  var conv = (faren-32)*5/9;
  return Math.round(conv*10)/10
};

const ctof = function(celc) {
  var converted = (celc*9/5) + 32;
  return Math.round(converted*10)/10
};

// Math.round is just rounding to the nearest whole, but we multiplied/divided to the tenth

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
