// https://projecteuler.net/problem=7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function find_prime(arr, targ) {
  let num = arr[arr.length-1]
  while (arr.length < targ) {
    num += 1;
    let prime = true;
    for (let i = 0; i < arr.length; i ++){
      if (num % arr[i] == 0){
        prime = false;
      }
    }
    if (prime == true){
      arr.push(num);
    }
  }
  return (arr[arr.length-1]);
}

let arr = [2, 3, 5, 7, 11, 13]
let targ = 10001

console.log(find_prime(arr, targ)); // 104743