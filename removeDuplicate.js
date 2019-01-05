// Remove Duplicates
// Write a function that removes duplicates from an array of numbers.

//  Ex: [2, 4, 7, 22, 3, 4, 2, 7] -> [2, 3, 4, 7, 22]

function removeDuplicates(arr) {
  result = []
  for (let i = 0; i < arr.length; i ++ ) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([2, 4, 7, 22, 3, 4, 2, 7])) // [2, 3, 4, 7, 22