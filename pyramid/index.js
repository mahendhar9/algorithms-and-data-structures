// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, currentRow = 0, level = "") {
  if(currentRow == n) {
    return;
  }

  if(level.length === 2*n-1) {
    console.log(level);
    pyramid(n, currentRow + 1);
    return;
  }

  const midpoint = Math.floor((2*n-1)/2);
  let add;

  if(midpoint - currentRow <= level.length && midpoint + currentRow >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, currentRow, level + add);
}

// Alternative solutions
// ------------------------
// function pyramid(n) {
//   const midpoint = Math.floor((2*n-1)/2);
//   for(let row = 0; row < n; row++) {
//     let level = "";
//     for(let column = 0; column < 2*n-1; column++) {
//       if((midpoint - row <= column) && (midpoint + row >= column)) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// -----------------------------

// function pyramid(n) {
//   for(let row = 1; row <= n; row++) {
//     const space = ' '.repeat(n - row);
//     const hashes = '#'.repeat(2 * row - 1);
//     console.log(space + hashes + space);
//   }
// }

//---------------------------------

// function pyramid(n, currentRow = 0) {
//   if (n === currentRow) {
//     return;
//   }
 
//   let numberOfColumns = 2 * n - 1;
//   let numberOfPounds = 2 * currentRow + 1;
//   let numberOfSpacesPerSide = (numberOfColumns - numberOfPounds) / 2;
 
//   let pounds = '#'.repeat(numberOfPounds);
//   let empySpace = ' '.repeat(numberOfSpacesPerSide);
 
//   console.log(empySpace + pounds + empySpace);
 
//   pyramid(n, currentRow + 1);
// }

module.exports = pyramid;
