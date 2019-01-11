// https://www.codewars.com/kata/array-dot-diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]
 
// first attempt
function arrayDiff(a,b) {
  let result = []
  for (x in a) {
    if (!(b.includes(a[x]))) {
      result.push(a[x]);
    }
  }
  return result;
}

// second attempt
function array_diff(a, b) {
  result = []
  for (x in a) {
    x != b && result.push(a[x]);
  }
  return result;
}

console.log(arrayDiff([1,2], [1])) // [2], "a was [1,2], b was [1], expected [2]")
console.log(arrayDiff([1,2,2], [1])) // [2,2], "a was [1,2,2], b was [1], expected [2,2]")
console.log(arrayDiff([1,2,2], [2])) // [1], "a was [1,2,2], b was [2], expected [1]")
console.log(arrayDiff([1,2,2], [])) // [1,2,2], "a was [1,2,2], b was [], expected [1,2,2]")
console.log(arrayDiff([], [1,2])) // [], "a was [], b was [1,2], expected []")