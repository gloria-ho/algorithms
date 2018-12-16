// Is It A Palindrome?
// Write a function that takes in a string and returns true or false depending on whether or not that string is a palindrome.

// Example: input 'racecar' -> true, input 'platypus' -> false


// first attempt
// halve the string
// check each letter from beginning against each letter from end
// if it does not match, return false and stop the function
// if it runs to end, input is a pandindrome and return true

function is_palindrome(str){
  let arr = str.split('');
  for (let b = 0, e = str.length -1 ; b < Math.floor(arr.length / 2); b++, e--)
    if (arr[b] != arr[e])
      return false;
  return true;
}

// second attempt
// check if first and last letter are equal
// if true, run the same function recursively on the substring of the second letter to the second to last letter

function is_palindrome(str){
  if(str.length <=1){
    return true;
  } else if (str[0] == str[str.length - 1]) { 
    is_palindrome(str.substring(1,(str.length -1)));
    return true;
  } else {
    return false;
  }
}

// third attempt
// check string against the reversed version of itself
function is_palindrome(str){
  return (str == (str.split('').reverse().join('')));
}

console.log(is_palindrome('racecar')); // true
console.log(is_palindrome('platypus')); // false

