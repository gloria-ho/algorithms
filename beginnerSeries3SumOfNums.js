// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


function getSum(a, b) {
  let result = 0
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      result += i;
    }
  }
  return result;
}

console.log(getSum(1, 0))    // 1 + 0 = 1
console.log(getSum(1, 2))    // 1 + 2 = 3
console.log(getSum(0, 1))    // 0 + 1 = 1
console.log(getSum(1, 1))    // 1 Since both are same
console.log(getSum(-1, 0))   // -1 + 0 = -1
console.log(getSum(-1, 2))   // -1 + 0 + 1 + 2 = 2