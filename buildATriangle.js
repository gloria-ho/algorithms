// Build A Triangle
// write a function that takes an integer, n, and prints out a triangle of base n to the console, ex:

//   #
//   ##
//   ###
//   ####
//   #####
//   ######
//   #######
//   ########


// using a for loop, start at 1 and count to n
// for each count, print a row with '#' repeated n times
function makeTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i));
  }
}

console.log(makeTriangle(3));