// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// --------------

//Check if respective chars at beginning and end of the string are same.
//abcdefg => a==g, b==f, ....

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length-i-1];
  });
}

// Alternate solution
// ----------------------

// function palindrome(str) {
//   reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

module.exports = palindrome;
