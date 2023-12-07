/******************
 * YOUR CODE HERE *
 ******************/
function isValidSecondary(color1) {
  return (color1 === "orange" || color1 === "purple" || color1 === "green"  )
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
