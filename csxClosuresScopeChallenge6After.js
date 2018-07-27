// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

// ADD CODE HERE

function after(x, cb) {
  let calledCount = 0
  return function(...arg) {
    calledCount ++
    return calledCount != x ? undefined : cb(...arg)
    //
    //ternary statement equivalent
    //
    // if (calledCount != x) {
    //   return undefined
    // }
    // return cb(...arg)
  }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> prints undefined
console.log(afterCalled('world')); // -> prints undefined
console.log(afterCalled('world')); // -> prints 'hello world'