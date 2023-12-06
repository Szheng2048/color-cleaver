/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(color1) {
  return color1 === "red" || color1 === "blue" || color1 === "yellow"
}


// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
