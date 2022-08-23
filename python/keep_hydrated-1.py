# https://www.codewars.com/kata/keep-hydrated-1

# Nathan loves cycling.

# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

# For example:

# time = 3 ----> litres = 1

# time = 6.7---> litres = 3

# time = 11.8--> litres = 5

import math

def hydrate(time):
  return int(math.floor(time * 0.5))

print(hydrate(3)) # 1
print(hydrate(6.7)) # 3
print(hydrate(11.8)) # 5