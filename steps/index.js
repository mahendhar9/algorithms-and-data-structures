// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if(n == row) {
    return;
  }

  if(stair.length === n) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}


// Alternative solutions
// -----------------------
// function steps(n) {
//   for(let row = 0; row < n; row++) {
//     let stair = "";
//     for(let column = 0; column < n; column++) {
//       if(column <= row) {
//         stair += '#';
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// ------------------------
// function steps(n) {
//  for (let i = 1; i <= n; i++) {
//  console.log('#'.repeat(i).padEnd(n));
//  }
// }

//---------------------------
// function steps(n) {
//   let pound = "#";
//   let empty = " ";
//   for(let row = 1; row <= n; row++) {
//     let makePound = pound.repeat(row);
//     let emptyAmt = n - row;
//     let makeSpaces = empty.repeat(emptyAmt);
//     let step = makePound + makeSpaces;
//     console.log(step)
//   }
// } 

//------------------------------
// function steps(n, row=0) {
//   if (n === row) {
//     return;
//   }

//   var pound = "#";
//   var empty = " ";

//   var makePound = pound.repeat(row+1);
//   var emptyAmt = n - (row+1);
//   var makeSpaces = empty.repeat(emptyAmt);
//   var final = makePound + makeSpaces;
//   console.log(final);
//   steps(n, row+1);
// }

module.exports = steps;
