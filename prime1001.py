# https://projecteuler.net/problem=7

# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10 001st prime number?

def find_prime(arr, targ):
  num = arr[-1]
  while len(arr) < targ:
    num += 1
    prime = True
    for x in arr:
      if num % x == 0:
        prime = False
    if prime == True:
      arr.append(num)
  return num

arr = [2, 3, 5, 7, 11, 13]
targ = 10001

print(find_prime(arr, targ)) # 104743