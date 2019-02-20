// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'


// first attempt
function solution(str){
  let result = '';
  for (let i = str.length-1; i >= 0; i--) {
    result += str[i];
  };
  return result;
};

// second attempt
const solution = (str) => {
  return str.split('').reverse().join('');
}

console.log(solution('world')) // 'dlrow'