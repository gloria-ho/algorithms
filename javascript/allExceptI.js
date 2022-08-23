// All Except i
// Given an array of integers, create a new array with the product of all the integers except for itself.

//  Ex: [1, 2, 3] => [6, 3, 2] 

function allExceptI(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j <arr.length; j++) {
      if (j != i) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(allExceptI([1, 2, 3])) // [6, 3, 2] 