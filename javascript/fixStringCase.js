// https://www.codewars.com/kata/5b180e9fedaa564a7000009aß

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!


// first attempt
function solve(s){
  let upper = 0;
  let lower = 0;
  for (x of s){
    if (x === x.toUpperCase()){
      upper ++;
    } else {
      lower ++;
    }
  }
  if (upper > lower) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

// second attempt
const solve = (s) => {
  let [upper, lower] = [0, 0];
  for (x of s) {
    x === x.toUpperCase() ? upper ++ : lower ++
  }
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase();
}


console.log(solve('TestTESTING')); // "TESTTESTING"
console.log(solve("coDe")) // = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
console.log(solve("CODe")) // = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
console.log(solve("coDE")) // = "code". Upper == lowercase. Change all to lowercase.