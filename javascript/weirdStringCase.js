// https://www.codewars.com/kata/52b757663a95b11b3d00062d

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
  let result = []
  let words = string.split(" ");
  for (let i = 0; i < words.length; i ++) {
    let word = ""
    for (let x = 0; x < words[i].length; x++) {
      if (x % 2 == 0) {
        word += words[i][x].toUpperCase();
      }
      else {
        word += words[i][x].toLowerCase();
      }
    }
    result.push(word);
  }  
  return result.join(" ");    
}

// tweaked syntax
const toWeirdCase = (string) => {
  let result = []
  let words = string.split(' ');
  for (let word of words) {
    let current = ''
    for (let index in word) {
      (parseInt(index)) % 2 === 0 ? current += word[index].toUpperCase() : current += word[index].toLowerCase() 
    }
    result.push(current);
  }
  return result.join(' ');
}

console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"