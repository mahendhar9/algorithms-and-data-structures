// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i=0; i < arr.length; i++) {
    for(let j=0; j < (arr.length-1-i); j++) {
      if(arr[j] > arr[j+1]) {
        let tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for(let i=0; i<arr.length; i++) {
    // Assume that the element at i is the least in the array
    let indexOfMin = i;
    for(let j=i+1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length/2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// ---------------------------------------------
// How recursion works in MergeSort?

// left = [100, -40, 500]
// right = [-124, 0, 21, 7]
// 1) merge(mergeSort([100, -40, 500]), mergeSort([-124, 0, 21, 7]));

// left = 100
// right = [-40, 500]
// 1) Left) merge(mergeSort([100]), mergeSort([-40, 500]));

// left = [-40] 
// right = [500]
// 1) Left) Right divide) merge(mergeSort([-40]), mergeSort([500]));

// -----------
// 1) Left) Right divide) merge return value
// [-40, 500]

// 1) Left) merge return value
// [-40, 100, 500]

// ------------------
// left=[ -124, 0 ]
// right=[ 21, 7 ]
// 1) Right) merge(mergeSort([ -124, 0 ]), mergeSort([ 21, 7 ]));

// left = [ -124 ]
// right = [ 0 ]
// 1) Right) Left divide) merge(mergeSort([ -124 ]), mergeSort([ 0 ]));

// ----------------
// 1) Right) Left divide) merge return value
// > a
// [ -124, 0 ]
// -----------------
// 1) Right) Right divide) merge(mergeSort([ 21 ]), mergeSort([ 7 ]));
// > left
// [ 21 ]
// > right
// [ 7 ]

// -------------------
// 1) Right) Right divide) merge return value 
// > a
// [ 7, 21 ]
// 1) Right) merge return value
// > a
// [ -124, 0, 7, 21 ]
// 1) Left) 1) Right merge return value
// > a
// [ -124,
//   -40,
//   0,
//   7,
//   21,
//   100,
//   500 ]



