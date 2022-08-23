// https://www.codewars.com/kata/convert-a-string-to-an-array

// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// attempt 1

function stringToArray(string){
  return string.split(' ');
}

// attempt 2

const stringToArray = (string) => return string.split(' ');