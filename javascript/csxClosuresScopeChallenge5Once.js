// https://csx.codesmith.io/units/closures-scope-execution-context/challenge-5

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

// ADD CODE HERE

function once(callback) {
  let calledOnce = false
  let cache
  return function(num) {
    if (calledOnce === false) {
      calledOnce = true
      cache = callback(num)
    } 
    return cache
  }
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7