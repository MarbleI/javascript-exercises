const ftoc = function(arg1) {
  let conversion = (arg1 - 32) * 5/9;
  return Math.round(conversion * 10) / 10;
};

const ctof = function(arg1) {
  let conversion = (arg1 * 9/5) + 32;
  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
