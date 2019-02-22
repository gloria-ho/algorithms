// https://www.codewars.com/kata/duplicate-encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("


// Notes:
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).

function duplicateEncode(word) {
  let str = word.toLowerCase();
  let count = {};
  let result = ''
  for (x in str) {
    if (!count[str[x]]){
      count[str[x]] = 1;
    } else {
      count[str[x]] += 1;
    }
  }
  for (x in str) {
    if (count[str[x]] == 1) {
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}

// using map
function duplicateEncoder(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Sucess")); // )())())