// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(sentence) {
  let result = [];
  let arr = sentence.split(' ');
  for (word in arr) {
    if (arr[word].length >= 5) {
      result.push((arr[word].split('').reverse().join('')));
    } else{
      result.push(arr[word]);
    }
  }
  return result.join(' ');
}

// version to pass codewars test
// function spinWords(sentence) {
//   let result = [];
//   let arr = sentence.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= 5) {
//       result.push((arr[i].split('').reverse().join('')));
//     } else{
//       result.push(arr[i]);
//     }
//   }
//   return result.join(' ');
// }

// second attempt
const spinWords = (sentence) => {
  let arr =  sentence.split(' ');
  let result = []
  for (let word of arr) {
    word.length >= 5 ? result.push(word.split('').reverse().join('')) : result.push(word)
  }
  return result.join(' ');
}


console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw" 
console.log(spinWords("This is a test")); // "This is a test" 
console.log(spinWords("This is another test")); // "This is rehtona test"
console.log(spinWords("Test")); // Test
console.log(spinWords("Testing")); // gnitseT