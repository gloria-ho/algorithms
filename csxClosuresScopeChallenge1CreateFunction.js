// https://csx.codesmith.io/units/closures-scope-execution-context/challenge-1

// Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

// var myFunction = createFunction();
//  // Let's call the function we created and log its return value
// console.log(myFunction()); //should log: 'hello world'

// ADD CODE HERE

function createFunction() {
  return function() {
    return "hello world"
  }
}

// Uncomment these to check your work!
var myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'