# https://www.codewars.com/kata/round-to-the-next-multiple-of-5

# Given an integer as input, can you round it to the next (meaning, "higher") 5?

# Examples:

# input:    output:
# 0    ->   0
# 2    ->   5
# 3    ->   5
# 12   ->   15
# 21   ->   25
# 30   ->   30
# -2   ->   0
# -5   ->   -5
# etc.
# Input may be any positive or negative integer (including 0).

# You can assume that all inputs are valid integers.

import math

def round_to_next5(n):
  if n % 5 == 0:
    return n
  if n > 0:
    return int(math.ceil(n / 5) * 5)
  if n < 0:
    return int(math.floor(n / 5) + 1) * 5

print(round_to_next5(0))
print(round_to_next5(2))
print(round_to_next5(3))
print(round_to_next5(12))
print(round_to_next5(21))
print(round_to_next5(30))
print(round_to_next5(-2))
print(round_to_next5(-5))