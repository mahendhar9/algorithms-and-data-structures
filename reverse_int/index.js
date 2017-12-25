// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  var rev = 0, rem;
  var n = Math.abs(num);
  while (n>0) {
    rem = n % 10;
    rev = rev * 10 + rem ;
    n = Math.floor(n/10);
  }
  return Math.sign(num) * rev;
}

//Alternate solution
// --------------------
// function reverseInt(n) {
//   reversed = n.toString().split('').reverse().join('');
//   return Math.sign(n) * parseInt(reversed);
// }

module.exports = reverseInt;
