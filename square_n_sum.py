# https://www.codewars.com/kata/515e271a311df0350d00000f

# Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

# For example:

# squareSum([1, 2, 2]); // should return 9

def square_sum(numbers):
  total = 0
  for x in numbers:
    total += (x**2)
  return total